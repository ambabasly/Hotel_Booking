import React from "react";

export function Section({ children, button, image, align }) {
  return (
    <section data-aos="fade-up">
      <div id={`${align === "right" ? "section--right" : "section--left"}`}>
        <div className="notes">
          {children}
          <button>{button}</button>
        </div>
        <div className="img">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
}
