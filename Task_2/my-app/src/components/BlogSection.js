import React from 'react';
import "./BlogSection.css";
import imgSrcMan from '../img/man-with-laptop.png';
import imgWebpMan from '../img/man-with-laptop.webp';
import imgAvifMan from '../img/man-with-laptop.avif';
import imgSrcWoman from '../img/woman-with-pc.png';
import imgWebpWoman from '../img/woman-with-pc.webp';
import imgAvifWoman from '../img/woman-with-pc.avif';
import imgSrcPC from '../img/pc-two-screens.png';
import imgWebpPC from '../img/pc-two-screens.webp';
import imgAvifPC from '../img/pc-two-screens.avif';

const BlogSection = () => {
    const blogPosts = [
        {
            imgSrc: imgSrcMan,
            imgWebp: imgWebpMan,
            imgAvif: imgAvifMan,
            date: '19 Jan 2022',
            title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
            description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
            link: '#'
        },
        {
            imgSrc: imgSrcWoman,
            imgWebp: imgWebpWoman,
            imgAvif: imgAvifWoman,
            date: '19 Jan 2022',
            title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
            description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
            link: '#'
        },
        {
            imgSrc: imgSrcPC,
            imgWebp: imgWebpPC,
            imgAvif: imgAvifPC,
            date: '19 Jan 2022',
            title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
            description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
            link: '#'
        }
    ];

    return (
        <section className="blog-section">
            <div className="container">
                <h2
                    className="blog-section__title title title_2 title_dark-blue"
                    data-aos="fade-right"
                    data-aos-duration="500"
                >
                    Our blog
                </h2>
                <ul className="blog-section__list">
                    {blogPosts.map((post, index) => (
                        <li
                            key={index}
                            className="blog-section__item"
                            data-aos={index % 2 === 0 ? 'flip-up' : 'flip-down'}
                            data-aos-duration={1000 * (index + 1)}
                        >
                            <a className="blog-section__link" href={post.link}>
                                <picture>
                                    <source srcSet={post.imgAvif} type="image/avif" />
                                    <source srcSet={post.imgWebp} type="image/webp" />
                                    <img
                                        alt=""
                                        className="blog-section__item-img"
                                        src={post.imgSrc}
                                    />
                                </picture>
                                <span className="blog-section__item-date">{post.date}</span>
                                <h3 className="blog-section__item-title title title_6 title_dark-blue">
                                    {post.title}
                                </h3>
                                <p className="blog-section__item-text text text_dark-blue">
                                    {post.description}
                                </p>
                            </a>
                            <a className="blog-section__item-link link link_dark-blue" href={post.link}>
                                Read More
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default BlogSection;
