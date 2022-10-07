import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const Assignment = () => {
  return (
    <>
      <P>The assignment operator is used to assign a value to a variable.</P>
      <CodeBlock>{`const a = 1;
const b = 2 * 3 
console.log(b) // 6`}</CodeBlock>
    </>
  );
};

export default Assignment;
