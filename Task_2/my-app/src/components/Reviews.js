import React from 'react';
import './Reviews.css';
import jennyAvif from '../img/jenny-wilson.avif';
import jennyWebp from '../img/jenny-wilson.webp';
import jennyPng from '../img/jenny-wilson.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import SwiperCore from 'swiper';

SwiperCore.use([Navigation, Pagination]);

const Reviews = () => {
    const reviews = [
        {
            text: "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus.",
            name: 'Jenny Wilson',
            position: 'Vice President',
            imgSrc: {
                avif: jennyAvif,
                webp: jennyWebp,
                png: jennyPng,
            },
        },
        {
            text: "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus.",
            name: 'Jenny Wilson',
            position: 'Vice President',
            imgSrc: {
                avif: jennyAvif,
                webp: jennyWebp,
                png: jennyPng,
            },
        },
        {
            text: "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus.",
            name: 'Jenny Wilson',
            position: 'Vice President',
            imgSrc: {
                avif: jennyAvif,
                webp: jennyWebp,
                png: jennyPng,
            },
        },
    ];

    return (
        <section className="reviews">
            <div className="reviews__container container">
                <div className="reviews__wrapper">
                    <h2
                        className="reviews__title title title_2 title_dark-blue"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        What our clients say about us
                    </h2>
                    <p
                        className="reviews__subtitle text text_dark-blue"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
                    </p>
                </div>
                <Swiper
                    navigation={{
                        nextEl: '.reviews__swiper-button-next',
                        prevEl: '.reviews__swiper-button-prev',
                    }}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop
                    className="reviews__swiper"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index} className="reviews__slide">
                            <p className="reviews__slide-text">{review.text}</p>
                            <div className="profile-and-buttons">
                                <div className="reviews__slide__profile">
                                    <picture className="reviews__slide__profile-img">
                                        <source srcSet={review.imgSrc.avif} type="image/avif"/>
                                        <source srcSet={review.imgSrc.webp} type="image/webp"/>
                                        <img
                                            alt="profile"
                                            className="reviews__slide__profile-img"
                                            src={review.imgSrc.png}
                                        />
                                    </picture>
                                    <span className="reviews__slide__profile-name">
                                {review.name}
                            </span>
                                    <span className="reviews__slide__profile-text">
                                {review.position}
                            </span>
                                </div>
                                <div className="swiper-buttons">
                                    <div className="reviews__swiper-button-prev"></div>
                                    <div className="reviews__swiper-button-next"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;
