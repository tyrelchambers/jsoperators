import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const ComparisonStrictEqual = () => {
  return (
    <>
      <P>
        The strict comparison operator takes into considering the type of each
        value. It won't try to coerce one type to another.
      </P>

      <CodeBlock>{`2 === "2" // false
2 === 2 // true`}</CodeBlock>
    </>
  );
};

export default ComparisonStrictEqual;
