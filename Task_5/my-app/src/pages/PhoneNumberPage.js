import React from "react";
import "../App.css";

export default function PhoneNumberPage({ onNext }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: "33%" }}></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <p className="subtitle">
          Fill in the registration data. It will take a couple of minutes. All
          you need is a phone number and e-mail
        </p>
        <label>Enter your phone number</label>
        <input type="tel" placeholder="+1 555 555-1234" required />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
