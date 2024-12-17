import React from 'react';
import './Header.css';
import logo from '../img/icons/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <a className="logo" href="#">
                    <img alt="logo" className="logo__img" src={logo} />
                </a>
                <nav className="header__nav nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a className="nav__link" href="/">Home</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#">About us</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#">Features</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="/pricing">Pricing</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#">FAQ</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#">Blog</a>
                        </li>
                    </ul>
                </nav>
                <a className="header__btn btn btn-stroke" href="#">Contact us</a>
            </div>
        </header>
    );
};

export default Header;
