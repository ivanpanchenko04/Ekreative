import React from 'react';
import './HowWeWork.css';

const HowWeWork = () => {
    return (
        <section className="how-we-work">
            <div className="how-we-work__container container">
                <div className="how-we-work__wrapper">
                    <h2
                        className="how-we-work__title title title_2 title_dark-blue"
                        data-aos="fade-right"
                        data-aos-duration="100"
                    >
                        How we work
                    </h2>
                    <p
                        className="how-we-work__subtitle text text_dark-blue"
                        data-aos="fade-right"
                        data-aos-duration="300"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                    <a
                        className="link link_royal-blue"
                        data-aos="fade-right"
                        data-aos-duration="500"
                        href="#"
                    >
                        Get in touch with us
                    </a>
                </div>
                <ul className="how-we-work__list">
                    {[
                        {
                            icon: '01',
                            title: 'Strategy',
                            text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.',
                        },
                        {
                            icon: '02',
                            title: 'Wireframing',
                            text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.',
                        },
                        {
                            icon: '03',
                            title: 'Design',
                            text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.',
                        },
                        {
                            icon: '04',
                            title: 'Development',
                            text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.',
                        },
                    ].map((item, index) => (
                        <li
                            key={index}
                            className="how-we-work__item"
                            data-aos="fade-up"
                            data-aos-duration={index < 2 ? '200' : '500'}
                        >
                            <span className="how-we-work__item-icon">{item.icon}</span>
                            <h3 className="how-we-work__item-title title title_dark-blue title_3">
                                {item.title}
                            </h3>
                            <p className="how-we-work__item-text text text_dark-blue">
                                {item.text}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HowWeWork;
