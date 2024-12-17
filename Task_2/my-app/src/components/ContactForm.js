import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <section className="contact-form">
            <div className="contact-form__container container">
                <div
                    className="contact-form__text"
                    data-aos="fade-up"
                    data-aos-duration="200"
                >
                    <h2 className="contact-form__text-title title title_2 title_white">
                        Building stellar websites for early startups
                    </h2>
                    <p className="contact-form__text-text text text_white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                    </p>
                </div>
                <div
                    className="contact-form__send-inquiry"
                    data-aos="fade-up"
                    data-aos-duration="1400"
                >
                    <h2
                        className="contact-form__send-inquiry-title title title_2 title_white"
                    >
                        Send inquiry
                    </h2>
                    <p className="contact-form__send-inquiry-text text text_white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore.
                    </p>
                    <form action="#" className="contact-form__send-inquiry__form">
                        <input
                            className="contact-form__send-inquiry__form-input"
                            placeholder="Your Name"
                            type="text"
                        />
                        <input
                            className="contact-form__send-inquiry__form-input"
                            placeholder="Email"
                            type="text"
                        />
                        <input
                            className="contact-form__send-inquiry__form-input"
                            placeholder="Paste your Figma design URL"
                            type="text"
                        />
                    </form>
                    <button
                        className="contact-form__send-inquiry__btn btn btn-fill btn-fill_yellow"
                    >
                        Send an Inquiry
                    </button>
                    <a
                        className="contact-form__send-inquiry__link link link_white"
                        href="#"
                    >
                        Get in touch with us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
