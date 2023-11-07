import React from "react";

import "./button.css";

export const Button = ({ buttonText, className, disabled, onClick, style }) => {
  return (
    <button
      style={style}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};
