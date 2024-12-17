import React from 'react';
import "./Pricing.css";
import pointer from "../img/icons/pointer.svg";

const Pricing = () => {
    const pricingPlans = [
        {
            price: 299,
            description: "When you're ready to go beyond prototyping in Figma.",
            plan: "Landing Page",
            features: [
                'All limited links',
                'Own analytics platform',
                'Chat support',
                'Optimize hashtags (inactive)',
                'Unlimited users (inactive)'
            ],
            buttonText: "Get started",
            buttonClass: "btn-fill_dark-blue",
        },
        {
            price: 399,
            description: "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
            plan: "Website Page",
            features: [
                'All limited links',
                'Own analytics platform',
                'Chat support',
                'Optimize hashtags',
                'Unlimited users'
            ],
            buttonText: "Get started",
            buttonClass: "btn-fill_yellow",
            highlighted: true,
        },
        {
            price: 499,
            description: "When you're ready to go beyond prototyping in Figma.",
            plan: "Complex Project",
            features: [
                'All limited links',
                'Own analytics platform',
                'Chat support',
                'Optimize hashtags',
                'Unlimited users',
                'Assist and Help'
            ],
            buttonText: "Contact us",
            buttonClass: "btn-fill_dark-blue",
        }
    ];

    return (
        <section className="pricing">
            <h2 className="pricing__title">Our Pricing Plans</h2>
            <p className="pricing__subtitle">
                When you're ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.
            </p>
            <div className="pricing__cards">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`pricing__card ${plan.highlighted ? 'pricing__card--highlighted' : ''}`}
                    >
                        <h3 className="pricing__price">
                            ${plan.price} <span className="for__what">{plan.highlighted ? 'Multi Design' : 'Per Design'}</span>
                        </h3>
                        <h4 className="pricing__plan">{plan.plan}</h4>
                        <p className="pricing__description">{plan.description}</p>
                        <ul className="pricing__features">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className={feature.includes('(inactive)') ? 'feature__inactive' : ''}>
                                    <img src={pointer} alt="Pointer" /> {feature}
                                </li>
                            ))}
                        </ul>
                        <a className={`btn btn-fill ${plan.buttonClass}`} href="#">
                            {plan.buttonText}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
