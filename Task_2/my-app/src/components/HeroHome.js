import React from 'react';
import './HeroHome.css';
import illustration from "../img/icons/hero-home__illustration.svg";

const HeroHome = () => {
    return (
        <section className="hero-home">
            <div className="hero-home__container container">
                <div className="hero-home__content">
                    <h1 className="hero-home__title title-main title-main_white">
                        Building stellar websites for early startups
                    </h1>
                    <p className="hero-home__subtitle text text_white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                    <div className="hero-home__wrapper">
                        <a className="hero-home__btn btn btn-fill btn-fill_yellow" href="#">
                            View our work
                        </a>
                        <a className="link link_white" href="#">
                            View Pricing
                        </a>
                    </div>
                </div>
                <img
                    alt="illustration"
                    className="hero-home__img"
                    src={illustration}
                />
            </div>
        </section>
    );
};

export default HeroHome;
