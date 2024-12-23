import React from "react";
import "../App.css";

export default function EmailAndPasswordPage({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    onSubmit({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: "100%" }}></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <p className="subtitle">
          Fill in the registration data. It will take a couple of minutes. All
          you need is a phone number and e-mail
        </p>
        <label>Enter your email</label>
        <input
          type="email"
          name="email"
          placeholder="alex_manager@gmail.com"
          required
        />
        <label>Set a password</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
