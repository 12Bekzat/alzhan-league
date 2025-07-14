/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Mail, Instagram, Youtube, Send, } from 'lucide-react'; // Можно заменить на любые другие
import Logo from '../assets/Aljan1-3_9R5tx.png'
import { FaInstagram, FaTelegram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer__row'>
                <div className='footer__content'>
                    <div className='footer__logo'>
                        <img src={Logo} alt="" />
                        <span>Alzhan league</span>
                    </div>
                    <div className='footer__copy'>&copy; Все права защищены, 2025 г.</div>
                    <span style={{ display: 'flex', gap: 12 }}>
                        <div className='footer__link'>Политика безопасности</div>
                        <div className='footer__link'>Обратная связь</div>
                    </span>
                </div>
                <div className='footer__content'>
                    <div className='footer__title'>Контакты</div>
                    <div className='footer__text'>info@alzhanleague.kz</div>
                    <div className='footer__icons'>
                        <div className='footer__icon'><FaInstagram size={30} color='white' /></div>
                        <div className='footer__icon'><FaTelegram size={30} color='white' /></div>
                        <div className='footer__icon'><FaWhatsapp size={30} color='white' /></div>
                        <div className='footer__icon'><FaYoutube size={30} color='white' /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
