/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import clsx from "clsx";

const Title = ({ title, className }) => {
  return (
    <h2 className={clsx("text-2xl font-semibold capitalize", className)}>
      {title}
    </h2>
  );
};

export default Title;
