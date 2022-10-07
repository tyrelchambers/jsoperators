import CodeBlock from "../CodeBlock";
import { Link } from "@tanstack/react-location";
import P from "../P";
import React from "react";

const ComparisonNotEqual = () => {
  return (
    <>
      <P>
        Inequality operator is like the{" "}
        <Link to="/?name=Comparison" className="text-indigo-500 underline">
          comparison
        </Link>{" "}
        operator, except it's the opposite. It will check that one value does
        not equal the other.
      </P>

      <CodeBlock>{`console.log('1' !=  1) // false
console.log(1 != 2) // true`}</CodeBlock>
    </>
  );
};

export default ComparisonNotEqual;
