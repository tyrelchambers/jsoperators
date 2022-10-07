import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const AssignmentMultiplication = () => {
  return (
    <>
      <P>
        This operator takes a variable and in a concise way, assigns another
        value to it while multiplying the original value with the new value.
      </P>
      <CodeBlock>{`let a = 1;
a *= 4 // a now equals 4`}</CodeBlock>
    </>
  );
};

export default AssignmentMultiplication;
