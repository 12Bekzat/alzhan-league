import React from 'react'
import ERG from '../assets/erg logo.png'
import Kusto from '../assets/kusto png.png'
import Zhebe from '../assets/zhebe logistics png.png'

const partners = [
    {
        logo: ERG,
    },
    {
        logo: Kusto,
    },
    {
        logo: Zhebe,
    }
];

export default function PartnersMini() {
    return (
        <div className='partners-mini'>
            <div className='partners-mini__container'>
            <div className='title'>Спонсоры</div>
            <div className='partners-mini__cards'>
                {partners.map((item, index) => <div className='partners-mini__card'>
                    <img src={item.logo} alt="" />
                </div>)}
            </div>
            </div>
        </div>
    )
}
