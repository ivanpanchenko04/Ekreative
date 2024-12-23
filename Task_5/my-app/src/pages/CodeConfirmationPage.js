import React, { useState } from "react";
import "../App.css";

export default function CodeConfirmationPage({ onNext }) {
  const [confirmationCode, setConfirmationCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmationCode === "1234") {
      onNext();
    } else {
      alert("Invalid confirmation code");
    }
  };

  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: "66%" }}></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <p className="subtitle">
          Fill in the registration data. It will take a couple of minutes. All
          you need is a phone number and e-mail
        </p>
        <label>Confirmation Code</label>
        <input
          type="text"
          value={confirmationCode}
          onChange={(e) => setConfirmationCode(e.target.value)}
          placeholder="1234"
          required
        />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}
