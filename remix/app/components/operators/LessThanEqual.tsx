import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const LessThanEqual = () => {
  return (
    <>
      <P>
        This operator check thats a value is less than or equal to another
        value.
      </P>
      <CodeBlock>{`console.log(2 <= 3) // true
console.log(2 <= 2) //true`}</CodeBlock>
    </>
  );
};

export default LessThanEqual;
