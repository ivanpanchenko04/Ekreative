import React from 'react';
import './FeaturesSection.css';
import feature1 from '../img/icons/features-section__list-img-1.svg';
import feature2 from '../img/icons/features-section__list-img-2.svg';
import feature3 from '../img/icons/features-section__list-img-3.svg';
import feature4 from '../img/icons/features-section__list-img-4.svg';
import feature5 from '../img/icons/features-section__list-img-5.svg';
import feature6 from '../img/icons/features-section__list-img-6.svg';


const FeaturesSection = () => {
    const features = [
        {
            title: 'Uses Client First',
            text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.',
            imgSrc: feature1,
            duration: '500',
        },
        {
            title: 'Two Free Revision Round',
            text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.',
            imgSrc: feature2,
            duration: '800',
        },
        {
            title: 'Template Customization',
            text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.',
            imgSrc: feature3,
            duration: '1100',
        },
        {
            title: '24/7 Support',
            text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.',
            imgSrc: feature4,
            duration: '500',
        },
        {
            title: 'Quick Delivery',
            text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.',
            imgSrc: feature5,
            duration: '800',
        },
        {
            title: 'Hands-on approach',
            text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.',
            imgSrc: feature6,
            duration: '1100',
        },
    ];

    return (
        <section className="features-section">
            <div className="features-section__container container">
        <span
            className="features-section__subtitle"
            data-aos="fade-up"
            data-aos-duration="500"
        >
          Features
        </span>
                <h2
                    className="features-section__title title title_2 title_dark-blue"
                    data-aos="fade-up"
                    data-aos-duration="900"
                >
                    Design that solves problems, one product at a time
                </h2>
                <ul className="features-section__list">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className="features-section__item"
                            data-aos="zoom-out"
                            data-aos-duration={feature.duration}
                        >
                            <img
                                alt="img"
                                className="features-section__item-img"
                                src={feature.imgSrc}
                            />
                            <h3 className="features-section__item-title title title_6 title_dark-blue">
                                {feature.title}
                            </h3>
                            <p className="features-section__item-text text text_dark-blue">
                                {feature.text}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FeaturesSection;
