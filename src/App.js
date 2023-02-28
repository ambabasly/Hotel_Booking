import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import AOS from "aos";
import "aos/dist/aos.css";

export function App() {
  useEffect(() => {
    AOS.init({ delay: 600, duration: 700, easing: "ease-out" });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
