import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const StrictNotEqual = () => {
  return (
    <>
      <P>
        This operator checks that a value does not equal another value in a
        strict manner. It will check the value and the type and determine if
        they are different or not.
      </P>

      <CodeBlock>{`console.log(1 !== "1") // true`}</CodeBlock>
    </>
  );
};

export default StrictNotEqual;
