import React, { useState } from 'react'

export default function LanguageSelector() {
    const [active, setActive] = useState('RU')

    const change = (lng) => {
        setActive(lng)
    }
    
    return (
        <div class="paste-button">
            <button class="button" style={{ width: '53px'}}>{active}</button>
            <div class="dropdown-content">
                <div className='child' id="top" href="#" onClick={() => change('RU')}>RU</div>
                <div className='child' id="middle" onClick={() => change('EN')}>EN</div>
                <div className='child' id="bottom" onClick={() => change('KZ')}>KZ</div>
            </div>
        </div>
    )
}
