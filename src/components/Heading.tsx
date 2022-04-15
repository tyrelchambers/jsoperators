import React from "react";

const Heading = ({ children }) => {
  return (
    <h2 className={`mt-4 mb-4 text-gray-800 text-xl font-bold`}>{children}</h2>
  );
};

export default Heading;
