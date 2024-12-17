import React from 'react';
import './OurProjectsSection.css';
import oneAvif from '../img/template-1.avif';
import oneWebp from '../img/template-1.webp';
import onePng from '../img/template-1.png';
import twoAvif from '../img/template-2.avif';
import twoWebp from '../img/template-2.webp';
import twoPng from '../img/template-2.png';
import threeAvif from '../img/template-3.avif';
import threeWebp from '../img/template-3.webp';
import threePng from '../img/template-3.png';



const OurProjectsSection = () => {
    const projects = [
        {
            title: 'Workhub office Webflow Webflow Design',
            text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam',
            linkText: 'View project',
            imgSrc: {
                avif: oneAvif,
                webp: oneWebp,
                png: onePng,
            },
            duration: '500',
            animation: 'fade-right',
        },
        {
            title: 'Unisaas Website Design',
            linkText: 'View project',
            imgSrc: {
                avif: twoAvif,
                webp: twoWebp,
                png: twoPng,
            },
            duration: '800',
            animation: 'fade-left',
        },
        {
            title: 'Workhub office Webflow Design',
            linkText: 'View project',
            imgSrc: {
                avif: threeAvif,
                webp: threeWebp,
                png: threePng,
            },
            duration: '1100',
            animation: 'fade-left',
        },
    ];

    return (
        <section className="our-projects-section">
            <div className="our-projects-section__container container">
                <div className="our-projects-section__wrapper">
                    <h2
                        className="our-projects-section__title title title_2 title_dark-blue"
                        data-aos="fade-up"
                        data-aos-duration="100"
                    >
                        View our projects
                    </h2>
                    <a
                        className="our-projects-section__link link link_dark-blue"
                        data-aos="fade-up"
                        data-aos-duration="300"
                        href="#"
                    >
                        View More
                    </a>
                </div>
                <ul className="our-projects-section__list">
                    {projects.map((project, index) => (
                        <li
                            key={index}
                            className="our-projects-section__item"
                            data-aos={project.animation}
                            data-aos-duration={project.duration}
                        >
                            <a className="our-projects-section__item-link" href="#">
                                <div className="our-projects-section__item-link__wrapper">
                  <span
                      className="our-projects-section__item-link__title title title_6 title_white"
                  >
                    {project.title}
                  </span>
                                    {project.text && (
                                        <span
                                            className="our-projects-section__item-link__text text text_white"
                                        >
                      {project.text}
                    </span>
                                    )}
                                    <span
                                        className="our-projects-section__item-link__link link link_yellow"
                                    >
                    {project.linkText}
                  </span>
                                </div>
                                <picture>
                                    <source srcSet={project.imgSrc.avif} type="image/avif" />
                                    <source srcSet={project.imgSrc.webp} type="image/webp" />
                                    <img
                                        alt="template"
                                        className="our-projects-section__item-link__img"
                                        src={project.imgSrc.png}
                                    />
                                </picture>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default OurProjectsSection;
