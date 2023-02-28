import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <div id="nav">
        <div>
          <h1>Round d Clock Suite</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Kontakt</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>
          <li>
            <Link to="/">Book</Link>
          </li>
        </ul>
        <div>
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
};
