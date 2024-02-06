import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {

    const location = useLocation();

    const isRegisterPage = location.pathname === "/register";
    const isLoginPage = location.pathname === "/login"

    let homeItem, coursesItem, profileItem;
    if (!isRegisterPage && !isLoginPage) {
        homeItem = <li><Link to="/">Главная</Link></li>
        coursesItem = <li><Link to="/courses">Все курсы</Link></li>;
        profileItem = <li><Link to="/profile">Мой профиль</Link></li>
    }
    else {
        homeItem = <li><Link to="/">На главную</Link></li>
    }

    return (
        <header>
        <div>
                <span className='logo'><Link to="/">Online Courses</Link></span>
                <ul className='nav'>
                    {homeItem}
                    {coursesItem}
                    {profileItem}
                </ul>
            </div>
        </header>
    );
}