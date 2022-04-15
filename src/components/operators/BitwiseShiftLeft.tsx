import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const BitwiseShiftLeft = () => {
  return (
    <>
      <P>
        The bitwise shift left operator will shift the specified number of bits
        to the left.
      </P>

      <P>
        In the example below, the left-hand 2 will have it's bits shifted 2 bits
        to the left because the right-hand number is a 2. In the second example,
        they will be shifted 3 bits.
      </P>

      <CodeBlock>
        {`console.log(2 << 2); // 8
console.log(2 << 3); // 24
console.log(2 << 4); // 64`}
      </CodeBlock>
    </>
  );
};

export default BitwiseShiftLeft;
