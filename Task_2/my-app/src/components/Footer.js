import React from 'react';
import "./Footer.css";
import facebook from '../img/icons/facebook.svg';
import twitter from '../img/icons/twitter.svg';
import inst from '../img/icons/inst.svg';
import linkedin from '../img/icons/linked.svg';
import logo from '../img/icons/logo.svg';

const Footer = () => {
    const socialLinks = [
        { alt: 'facebook', src: facebook, link: '#' },
        { alt: 'twitter', src: twitter, link: '#' },
        { alt: 'inst', src: inst, link: '#' },
        { alt: 'linked', src: linkedin, link: '#' },
    ];

    const footerLinks = [
        { label: 'Home', link: '/' },
        { label: 'About us', link: '#' },
        { label: 'Features', link: '#' },
        { label: 'Pricing', link: '/pricing' },
        { label: 'FAQ', link: '#' },
        { label: 'Blog', link: '#' },
    ];

    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__top__container container">
                    <div className="footer__wrapper" data-aos="fade-up" data-aos-duration="500">
                        <a className="footer__wrapper-link" href="#">
                            <img alt="logo" className="footer__wrapper-img" src={logo} />
                        </a>
                        <p className="footer__wrapper-text text text_white">
                            We are always open to discuss your project and improve your online presence.
                        </p>
                    </div>
                    <div className="footer__talk" data-aos="fade-up" data-aos-duration="500">
                        <h2 className="footer__talk-title title title_2 title_white">Let's talk!</h2>
                        <p className="footer__talk-text text text_white">
                            We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
                        </p>
                        <ul className="footer__talk-list">
                            {socialLinks.map((social, index) => (
                                <li className="footer__talk-item" key={index}>
                                    <a className="footer__talk-link" href={social.link}>
                                        <img alt={social.alt} className="footer__talk-img" src={social.src} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer__contact" data-aos="fade-up" data-aos-duration="1600">
                        <ul className="footer__contact-list">
                            <li className="footer__contact-item">
                                <span className="footer__contact-title">Email me at</span>
                                <a className="footer__contact-subtitle text text_dark-blue" href="#">
                                    contact@website.com
                                </a>
                            </li>
                            <li className="footer__contact-item">
                                <span className="footer__contact-title">Call us</span>
                                <a className="footer__contact-subtitle text text_dark-blue" href="#">
                                    0927 6277 28525
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom__container container">
          <span
              className="footer__copyright"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
          >
            Copyright 2022, Finsweet.com
          </span>
                    <nav
                        className="footer__nav"
                        data-aos="fade-left"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-duration="1000"
                    >
                        <ul className="footer__list">
                            {footerLinks.map((link, index) => (
                                <li className="footer__item" key={index}>
                                    <a className="footer__link" href={link.link}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
