/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Logo from '../assets/Aljan1-3_9R5tx.png'
import LanguageSelector from './LanguageSelector'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <div className='header'>
            <div className='header__row'>
                <div className='header__logo'>
                    <img src={Logo} alt="" />
                    <span>Alzhan league</span>
                </div>
                <div className='header__links'>
                    <NavLink to='/' className={({ isActive }) => 'header__link ' + (isActive ? 'active' : '')}>Главная</NavLink>
                    <NavLink to='/about' className={({ isActive }) => 'header__link ' + (isActive ? 'active' : '')}>О нас</NavLink>
                    <div className='header__link' >Статистика игр</div>
                    <div className="paste-button">
                        <button className="button">Навигация</button>
                        <div className="dropdown-content">
                            <div className='child' id="top" href="#">Проекты и мероприятия</div>
                            <div className='child' id="middle" href="#">Партнёры и спонсоры</div>
                            <div className='child' id="bottom" href="#">Новости / Актуально</div>
                        </div>
                    </div>
                    <NavLink to='/contacts' className={({ isActive }) => 'header__link ' + (isActive ? 'active' : '')} style={{ marginRight: '24px' }}>Контакты</NavLink>
                    <LanguageSelector />
                    <div className='main-button'>Хочу стать спонсором</div>
                </div>
            </div>
        </div>
    )
}
