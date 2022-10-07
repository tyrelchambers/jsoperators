import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const BitwiseNot = () => {
  return (
    <>
      <P>
        The bitwise NOT operator "~" will invert the bits on the 32-bit signed
        integer it is applied to.
      </P>

      <CodeBlock>
        {`console.log(~2); // -3
console.log(~3); // -4
console.log(~4); // -5`}
      </CodeBlock>
    </>
  );
};

export default BitwiseNot;
