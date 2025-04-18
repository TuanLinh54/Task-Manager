/* eslint-disable no-unused-vars */
import clsx from "clsx";
import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ icon, className, label, type, onClick = () => {} }) => {
  return (
    <button
      type={type || "button"}
      className={clsx("px-3 py-2 outline-none", className)}
      onClick={onClick}
    >
      <span>{label} </span>
      {icon && icon}
    </button>
  );
};

export default Button;
