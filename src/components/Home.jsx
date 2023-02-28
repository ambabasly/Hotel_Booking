import React from "react";
import Contact from "./Contact";
import {Footer }from "./Footer";
import { Header } from "./Header";
import {MiniSection} from "./MiniSection";
import {Nav }from "./Nav";
import {Section }from "./Section";
import {Services} from "./Services";
import {SocialsSection} from "./SocialsSection";
import { sectionData } from "../data";

export const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <Section
        image={sectionData[0].image}
        button="Jetzt erkunden"
        align={"right"}
        children={
          <>
            <h1>Komfort & Bequemlichkeit!</h1>
            <h3>Bei uns erhalten Sie sowohl Komfort als auch Bequemlichkeit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              delectus, tenetur maxime libero deleniti perferendis in cum
              voluptatum omnis nisi rerum voluptates repellendus cupiditate
              impedit! Cum aut enim fugit veniam!
            </p>
          </>
        }
      />
      <MiniSection />
      <Section
        image={sectionData[1].image}
        button="Jetzt erkunden"
        align={"left"}
        children={
          <>
            <h1>Warum uns wählen?</h1>
            <ul style={{ listStyleType: "disc", paddingLeft: "1rem" }}>
              <li>Geräumige Zimmer</li>
              <li>Erschwinglich</li>
              <li>Gelassenes Umfeld</li>
              <li>Vollständig ausgestatteter Fitnessraum</li>
              <li>Großer Außenpool</li>
              <li>Lokale und interkontinentale Gerichte</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              delectus, tenetur maxime libero deleniti perferendis in cum
              voluptatum omnis nisi rerum voluptates repellendus cupiditate
              impedit! Cum aut enim fugit veniam!
            </p>
          </>
        }
      />
      <SocialsSection />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};
