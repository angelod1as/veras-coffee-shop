import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <h2 id="about-us" className="title-shadow about-title">
        About us
      </h2>

      <div className="about-box">
        <p>
          This little shop has been a family business since 2006 — and for 2
          years owned by Vera, who grew up in the coffee shop and always wanted
          to be part of this family dream.
        </p>
        <p>
          She wishes that every customer can have a good time, with a nice
          selection of coffee and snacks.
        </p>
      </div>
    </footer>
  );
};
