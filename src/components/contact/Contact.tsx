import React from "react";
import "./contact.css";
import Image from "next/image";

export const Contact = () => {
  return (
    <div>
      <h2 id="contact">Contact</h2>
      <div className="contact-boxes">
        <div className="contact-box box-brown">
          <h3>Instagram</h3>
          <div className="logo-box">
            <a href="https://instagram.com" target="_blank">
              <Image
                src="/instagram.png"
                alt="Instagram logo"
                width={100}
                height={100}
                className="instagram-logo"
              />
            </a>
          </div>
        </div>
        <div className="contact-box box-darkgreen">
          <h3>Our address</h3>
          <p>Ria-Burkei-Straße 24, Munich</p>
        </div>
        <div className="contact-box box-green">
          <h3>Phone number</h3>
          <p>123 456 789</p>
        </div>
      </div>
    </div>
  );
};
