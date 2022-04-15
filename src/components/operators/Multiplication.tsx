import CodeBlock from "../CodeBlock";
import { Link } from "@tanstack/react-location";
import P from "../P";
import React from "react";

const Multiplication = () => {
  return (
    <>
      <P>
        This operator multiplies two numbers together. Unlike{" "}
        <Link to="/?name=Addition" className="text-indigo-500 underline">
          addition
        </Link>
        , you can't multiply a number with a string.
      </P>

      <CodeBlock>
        {`console.log(2 * 2); // 4
console.log(2 * "2"); // NaN`}
      </CodeBlock>
    </>
  );
};

export default Multiplication;
