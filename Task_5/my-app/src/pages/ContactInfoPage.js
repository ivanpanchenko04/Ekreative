import React from "react";
import "../App.css";

export default function ContactInfoPage({ onNext }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: "66%" }}></div>
      </div>

      <form onSubmit={handleSubmit}>
        <h1>Profile info</h1>
        <p className="subtitle">
          Fill in the data for profile. It will take a couple of minutes. You
          only need a passport
        </p>
        <h3>Contacts</h3>
        <p className="small-subtitle">
          These contacts are used to inform about orders
        </p>

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="alex_manager@gmail.com"
          required
        />

        <label>Phone Number</label>
        <input type="tel" name="phone" placeholder="+1 555 555-1234" required />

        <h3>Social network</h3>
        <p className="small-subtitle">
          Indicate the desired communication method
        </p>

        <label>Skype</label>
        <input type="text" name="skype" placeholder="live:john.doe" required />

        <label>Facebook</label>
        <input
          type="url"
          name="facebook"
          placeholder="https://facebook.com/johndoe"
          required
        />

        <button type="submit">Next</button>
      </form>
    </div>
  );
}
