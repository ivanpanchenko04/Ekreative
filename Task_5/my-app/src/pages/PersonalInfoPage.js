import React from "react";
import "../App.css";

export default function PersonalInfoPage({ onNext }) {
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
        <h1>Profile info</h1>
        <p className="subtitle">
          Fill in the data for profile. It will take a couple of minutes. You
          only need a passport
        </p>
        <h3>Personal data</h3>
        <p className="small-subtitle">Specify exactly as in your passport</p>

        <label>First Name</label>
        <input type="text" name="firstName" placeholder="John" required />
        <br />

        <label>Last Name</label>
        <input type="text" name="lastName" placeholder="Doe" required />
        <br />

        <label>Date of Birth</label>
        <input type="date" name="birthDate" required />
        <br />

        <label>Place of Birth</label>
        <input type="text" name="birthPlace" placeholder="New York" required />
        <br />

        <label>ITN</label>
        <input type="text" name="itn" placeholder="1234567890" required />
        <br />

        <button type="submit">Next</button>
      </form>
    </div>
  );
}
