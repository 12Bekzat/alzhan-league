/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import LanguageSelector from "./LanguageSelector";
import { Link, NavLink } from "react-router-dom";
import Popup from "./Popup";
import Sponsor from '../pages/Sponsor';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="header">
      <div className="header__row">
        <div className="header__logo">
          <img src={Logo} alt="" />
          <span>
            Alzhan <p>league</p>
          </span>
        </div>
        <div className="header__links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "header__link " + (isActive ? "active" : "")
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "header__link " + (isActive ? "active" : "")
            }
          >
            О нас
          </NavLink>
          <NavLink
            to={"/statistics"}
            className={({ isActive }) =>
              "header__link " + (isActive ? "active" : "")
            }
          >
            Статистика игр
          </NavLink>
          <div className="paste-button">
            <button className="button">Навигация</button>
            <div className="dropdown-content" style={{ minWidth: 200 }}>
              <NavLink to={"/projects"} className="child" id="top" href="#">
                Проекты и мероприятия
              </NavLink>
              <NavLink to={"/news"} className="child" id="bottom" href="#">
                Новости / Актуально
              </NavLink>
              <NavLink to="/contacts" className="child">
                Контакты
              </NavLink>
            </div>
          </div>
          <NavLink
            to={"/partners"}
            className={({ isActive }) =>
              "header__link " + (isActive ? "active" : "")
            }
          >
            Cпонсоры
          </NavLink>
          <LanguageSelector />
          <div className="main-button" onClick={() => setIsOpen(true)}>Хочу стать спонсором</div>
          <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} >
            <Sponsor />
          </Popup>
        </div>
      </div>
    </div>
  );
};
