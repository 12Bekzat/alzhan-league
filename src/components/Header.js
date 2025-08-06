/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../assets/Logo.png";
import LanguageSelector from "./LanguageSelector";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
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
            Партнёры и спонсоры
          </NavLink>
          <LanguageSelector />
          <Link to={'/sponsor'} className="main-button">Хочу стать спонсором</Link>
        </div>
      </div>
    </div>
  );
};
