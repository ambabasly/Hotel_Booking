import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const MiniSection = () => {
  return (
    <div id="miniSection">
      <div className="mini--section">
        <div>
          <h2>Erschwingliche Zimmer für Sie</h2>
        </div>
        <div>
          <button>
            Jetzt erkunden <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
