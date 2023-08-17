import React from "react";
import "./Footer.css";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <h2 id="contact">Get in Contact </h2>

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
          <a href="tel:123456789">123 456 789</a>
        </div>
      </div>
    </footer>
  );
};
