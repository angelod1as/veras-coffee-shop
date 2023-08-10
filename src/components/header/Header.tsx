import Image from "next/image";
import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <nav className="header-buttons">
        <a href="#reservation">
          <button>Reservation</button>
        </a>
        <a href="#contact">
          <button>Contact</button>
        </a>
        <a href="#about-us">
          <button>About us</button>
        </a>
      </nav>
      <div className="header-image">
        <Image
          alt="A cafe mug in a brown tray. The cafe has a nice latte arte and the background has some nature"
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
