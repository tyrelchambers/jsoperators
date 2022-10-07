import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const BitwiseXor = () => {
  return (
    <>
      <P>
        The bitwise XOR operator results in a 32-bit integer where each bit in
        the numbers being XORed is set to 1 if the corresponding bits are
        different and 0 if they are the same.
      </P>

      <CodeBlock>
        {`console.log(2 ^ 2); // 0
console.log(2 ^ 3); // 3
console.log(2 ^ 4); // 6`}
      </CodeBlock>
    </>
  );
};

export default BitwiseXor;
