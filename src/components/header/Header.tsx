import Image from "next/image";
import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="header-navigation">
          <li>
            <a href="#reservation">Reservation</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about-us">About us</a>
          </li>
        </ul>
      </nav>

      <div className="header-image">
        <Image
          alt="coffee mug"
          src="/cafe.jpg"
          width={300}
          height={300}
          className="image"
        />
        <div>
          <h1>foobar Café</h1>
          <p>Love in every latte.</p>
        </div>
      </div>
    </header>
  );
};
