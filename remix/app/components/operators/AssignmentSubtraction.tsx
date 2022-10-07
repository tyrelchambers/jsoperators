import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const AssignmentSubtraction = () => {
  return (
    <>
      <P>
        This operator takes a variable and in a concise way, assigns another
        value to it while subtracting the original value to the new value.
      </P>
      <CodeBlock>{`let a = 1;
a -= 4 // a now equals -3`}</CodeBlock>
    </>
  );
};

export default AssignmentSubtraction;
