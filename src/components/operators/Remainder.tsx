import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const Remainder = () => {
  return (
    <>
      <P>
        The remainder operator divides the left number by the right number and
        returns the amount that is left over. The remainder always takes the
        sign of the left oeprand.
      </P>

      <CodeBlock>
        {`console.log(2 % 2); // 0
console.log(2 % -2); // 0
console.log(-2 % 2); // -2
console.log(-2 % -2); // 0`}
      </CodeBlock>
    </>
  );
};

export default Remainder;
