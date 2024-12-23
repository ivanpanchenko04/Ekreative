import React from "react";
import "../App.css";

export default function AddressInfoPage({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    onSubmit({
      address: data.get("address"),
      city: data.get("city"),
      country: data.get("country"),
      zipCode: data.get("zipCode"),
    });
  };

  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: "100%" }}></div>
      </div>

      <form onSubmit={handleSubmit}>
        <h1>Profile info</h1>
        <p className="subtitle">
          Fill in the data for profile. It will take a couple of minutes. You
          only need a passport
        </p>
        <h3>Delivery address</h3>
        <p className="small-subtitle">Used for shipping orders</p>

        <label>Address</label>
        <input type="text" name="address" placeholder="123 Main St" required />

        <label>City</label>
        <input type="text" name="city" placeholder="Los Angeles" required />

        <label>Country</label>
        <input
          type="text"
          name="country"
          placeholder="United States"
          required
        />

        <label>ZIP Code</label>
        <input type="text" name="zipCode" placeholder="90001" required />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
