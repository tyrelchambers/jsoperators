import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const LogicalNot = () => {
  return (
    <>
      <P>
        The logical-not operator checks if a value is falsy. The "!" operator
        can be thought of saying if "A" is <strong>not</strong> "B" then execute
        some code.
      </P>

      <CodeBlock>{`const a = false;

// this check if a is false
if (!a) {
  console.log('a is false');
}
`}</CodeBlock>
    </>
  );
};

export default LogicalNot;
