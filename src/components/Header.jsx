import React from "react";
import { MdHotel } from "react-icons/md";

export const Header = () => {
  return (
    <header>
      <div>
        <h1 data-aos="fade-down">Sichere Umgebung & beste Dienstleistungen</h1>
        <h2>Ein perfektes Ziel für Business und Freizeits!</h2>
        <button className="cta" data-aos="fade-up">
          JETZT BUCHEN
          <h3>
            <MdHotel />
          </h3>
        </button>
      </div>
    </header>
  );
};
