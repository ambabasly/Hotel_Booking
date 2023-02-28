import React from "react";

export default function Contact() {
  return (
    <div id="contactContainer">
      <div id="contact" data-aos="fade-up">
        <div>
          <h2>Kontaktiere uns:</h2>
          <p>Für Fragen, Buchungen, Preise oder Anfragen,</p>
          <p>
            Füllen Sie das Formular aus, um uns zu erreichen! Unser Customer
            Support Team wird sicher sein dass Sie rechtzeitig eine Antwort
            erhalten!{" "}
          </p>
        </div>

        <form method="POST" data-aos="fade-down">
          <input
            name="vollständiger Name"
            type="text"
            placeholder="vollständiger Name"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Ihre-E-Mail@mail.com"
            required
          />
          <input
            name="phone"
            type="phone"
            placeholder="Ihre-phone-nummer"
            required
          />
          <input
            name="subject"
            type="text"
            placeholder="Betreff/Titel der Nachricht"
            required
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="...Ihre Nachricht eingeben"
            required
          />
          <input type="submit" value="Nachricht senden" />
        </form>
      </div>
    </div>
  );
}
