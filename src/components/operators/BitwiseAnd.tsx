import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const BitwiseAnd = () => {
  return (
    <>
      <P>
        The bitwise and operator takes the left number and ANDs it with the
        right number. The result is a number with the bits of the left number
        set to 1 if the same bit is set in both numbers and 0 if it is not.{" "}
        <br />
        <em>Github Copilot wrote this.</em>
      </P>

      <CodeBlock>
        {`console.log(2 & 2); // 2
console.log(2 & 3); // 2
console.log(2 & 4); // 0`}
      </CodeBlock>
    </>
  );
};

export default BitwiseAnd;
