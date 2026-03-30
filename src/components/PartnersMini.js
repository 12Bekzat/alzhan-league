import React from 'react'
import ERG from '../assets/partners/erg logo.png'
import Kusto from '../assets/partners/kusto png.png'
import Zhebe from '../assets/partners/zhebe logistics png.png'
import Federation from '../assets/partners/federation.png'
import PBK from '../assets/partners/pbk.png'
import InfiniteMarquee from './InfiniteMarquee'

const partners = [
    {
        src: ERG,
        alt: ''
    },
    {
        src: Kusto,
        alt: ''
    },
    {
        src: Zhebe,
        alt: ''
    },
    {
        src: Federation,
        alt: ''
    },
    {
        src: PBK,
        alt: ''
    }
];

export default function PartnersMini() {
    return (
        <div className='partners-mini'>
            <div className='partners-mini__container'>
                <div className='title'>Нас поддержали</div>
                <InfiniteMarquee
                    images={partners}
                    height={180}    // подгони под вашу картинку
                    gap={180}
                    duration={28} // быстрее/медленнее
                />
            </div>
        </div>
    )
}
