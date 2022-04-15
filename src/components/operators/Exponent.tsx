import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const Exponent = () => {
  return (
    <>
      <P>
        The exponent operator raises the left number to the power of the right
        number.
      </P>

      <CodeBlock>
        {`console.log(2 ** 2); // 4
console.log(2 ** -2); // 0.25`}
      </CodeBlock>
    </>
  );
};

export default Exponent;
