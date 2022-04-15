import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const GreaterThanEqual = () => {
  return (
    <>
      <P>
        This operator check thats a value is greater than or equal to another
        value.
      </P>
      <CodeBlock>{`console.log(2 >= 3) // false
console.log(2 >= 2) //true`}</CodeBlock>
    </>
  );
};

export default GreaterThanEqual;
