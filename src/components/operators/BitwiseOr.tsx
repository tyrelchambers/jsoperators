import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const BitwiseOr = () => {
  return (
    <>
      <P>
        The bitwise OR operator results in a 32-bit integer where each bit in
        the numbers being ORed is set to 1 if either of the corresponding bits
        are set to 1. If either number is different, that resulting bit will be
        set to 0.
      </P>

      <CodeBlock>
        {`console.log(2 | 2); // 2
console.log(2 | 3); // 3
console.log(2 | 4); // 6`}
      </CodeBlock>
    </>
  );
};

export default BitwiseOr;
