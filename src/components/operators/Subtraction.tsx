import CodeBlock from "../CodeBlock";
import { Link } from "@tanstack/react-location";
import P from "../P";
import React from "react";

const Subtraction = () => {
  return (
    <>
      <P>
        Subtraction behaves in the same way as the{" "}
        <Link to="/?name=Addition" className="text-indigo-500 underline">
          addition
        </Link>{" "}
        operator.
      </P>
      <CodeBlock>console.log(1 - 1); // 0</CodeBlock>
      <P>However, you can't subtract a number from a string.</P>
      <CodeBlock>console.log("test" - 1); // NaN</CodeBlock>
    </>
  );
};

export default Subtraction;
