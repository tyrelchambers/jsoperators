import { Link } from "@remix-run/react";
import React from "react";
import { Operator } from "../../../../src/types";

const OperatorButton = ({ operator }: { operator: Operator }) => {
  return (
    <Link to={`/operator/${operator.filename}`}>
      <div className="flex flex-col items-start bg-white p-4 rounded-lg w-full gap-2 border-2 hover:border-indigo-300 transition-all hover:shadow-lg ">
        <p className="text-indigo-500 text-xl font-bold">{operator.icon}</p>
        <h2 className="text-lg font-bold text-gray-700 text-left">
          {operator.name}
        </h2>
      </div>
    </Link>
  );
};

export default OperatorButton;
