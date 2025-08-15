import React from 'react'
import ERG from '../assets/erg logo.png'
import Kusto from '../assets/kusto png.png'
import Zhebe from '../assets/zhebe logistics png.png'
import Federation from '../assets/federation.png'
import PBK from '../assets/pbk.png'

const partners = [
    {
        logo: ERG,
    },
    {
        logo: Kusto,
    },
    {
        logo: Zhebe,
    },
    {
        logo: Federation,
    },
    {
        logo: PBK,
    }
];

export default function PartnersMini() {
    return (
        <div className='partners-mini'>
            <div className='partners-mini__container'>
            <div className='title'>Нас поддержали</div>
            <div className='partners-mini__cards'>
                {partners.map((item, index) => <div className='partners-mini__card'>
                    <img src={item.logo} alt="" />
                </div>)}
            </div>
            </div>
        </div>
    )
}
