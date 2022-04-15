import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const Division = () => {
  return (
    <>
      <P>
        The division operator takes the left number and divides it by the right
        number, producing the quoient. The left number is the dividend and the
        right is the operand.
      </P>

      <CodeBlock>
        {`console.log(2 / 2); // 1
console.log(2 / "2"); // NaN`}
      </CodeBlock>
    </>
  );
};

export default Division;
