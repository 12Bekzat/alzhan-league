import React from 'react';
import { Phone, Mail, Instagram, Link as LinkIcon } from 'lucide-react'; // Или react-icons, если хочешь
import Logo from '../assets/Logo.png'

export default function Contacts() {
    return (
        <>
            <div className='container'>
                <section className="contacts">
                    <h2>Контакты</h2>
                    <div className="contacts-card">
                        <div className="contacts-logo">
                            <img src={Logo} alt="Alzhan League" />
                        </div>
                        <div className="contacts-info">
                            <span className="contacts-badge">ЛИГА</span>
                            <h3>Alzhan League</h3>
                            <p className="contacts-subtitle">Школьная Лига «Alzhan»</p>

                            <div className="contacts-item">
                                <Phone size={18} />
                                <span>Телефон</span>
                                <p>+7 705 667 0405</p>
                            </div>

                            <div className="contacts-item">
                                <Mail size={18} />
                                <span>Email</span>
                                <p>kazbasket.fund@gmail.com</p>
                            </div>

                            <div className="contacts-item">
                                <Instagram size={18} />
                                <span>Instagram</span>
                                <p>https://www.instagram.com/alzhan.league?igsh=MWJhNHcyMGZweXpjZA==</p>
                            </div>

                            <div className="contacts-item">
                                <LinkIcon size={18} />
                                <span>Еще ссылки</span>
                                <p>https://www.instagram.com/alzhan.fund?igsh=NDI4NGtqZXFramVq</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
