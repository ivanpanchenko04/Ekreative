import React, { useState } from 'react';
import './Faq.css';
//import 'aos/dist/aos.css';
import plus from "../img/icons/plus.svg";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'How much time does it take?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            question: 'What is your class naming convention?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            question: 'How do you communicate?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            question: 'I have a bigger project. Can you handle it?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            question: 'What is your class naming convention?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq">
            <div className="faq__container container">
                <div className="faq__wrapper">
                    <h2
                        className="faq__title title title_2 title_dark-blue"
                        data-aos="fade-right"
                        data-aos-duration="300"
                    >
                        Frequently asked questions
                    </h2>
                    <a
                        className="faq__link link link_royal-blue"
                        data-aos="fade-right"
                        data-aos-duration="500"
                        href="#"
                    >
                        Contact us for more info
                    </a>
                </div>
                <div className="faq__accordion">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq__accordion-content ${
                                activeIndex === index ? 'active' : ''
                            }`}
                            data-aos="flip-down"
                            data-aos-duration={`${800 + index * 200}`}
                        >
                            <div
                                className="faq__accordion__header"
                                onClick={() => toggleAccordion(index)}
                            >
                <span className="faq__accordion-number title title_6 title_royal-blue">
                  {index + 1}
                </span>
                                <h3 className="faq__accordion-title title title_5 title_dark-blue">
                                    {faq.question}
                                </h3>
                                <img
                                    alt="plus"
                                    className={`faq__accordion-img ${
                                        activeIndex === index ? 'rotate' : ''
                                    }`}
                                    src={plus}
                                />
                            </div>
                            {activeIndex === index && (
                                <p className="faq__accordion-text">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
