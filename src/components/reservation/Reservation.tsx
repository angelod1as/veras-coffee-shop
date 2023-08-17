"use client";

import React from "react";
import "./Reservation.css";

export const Reservation = () => {
  const onSubmitForm: React.FormEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div id="reservation" className="reservation" onSubmit={onSubmitForm}>
      <form className="reservation-form">
        <h2>Reservation</h2>

        <div className="reservation-form-row">
          <div className="reservation-form-field">
            <label htmlFor="name">Name</label>
            <input name="name" id="name" type="text" required />
          </div>

          <div className="reservation-form-field">
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" id="lastName" type="text" required />
          </div>
        </div>

        <div className="reservation-form-row">
          <div className="reservation-form-field">
            <label htmlFor="email">E-Mail</label>
            <input name="email" id="email" type="email" required />
          </div>

          <div className="reservation-form-field">
            <label htmlFor="phone">Phone number (optional)</label>
            <input name="phone" id="phone" type="tel" />
          </div>
        </div>

        <div className="reservation-form-row">
          <div className="reservation-form-field">
            <label htmlFor="date">Date, Time</label>
            <input name="date" id="date" type="datetime-local" required />
          </div>

          <div className="reservation-form-field">
            <label htmlFor="peopleAmount">Amount of people (Max: 10)</label>
            <input
              name="peopleAmount"
              id="peopleAmount"
              type="number"
              required
              max={10}
            />
          </div>
        </div>

        <div className="reservation-form-row">
          <label htmlFor="terms" className="reservation-form-terms">
            <input type="checkbox" name="terms" id="terms" required />I accept
            the terms of use and Privacy Policy
          </label>
        </div>

        <button type="submit" className="reservation-form-button">
          Make reservation
        </button>
      </form>
    </div>
  );
};
