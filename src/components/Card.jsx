import React from "react";

export const Card = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <h3>{title}</h3>
    </div>
  );
};
