import CodeBlock from "../CodeBlock";
import Heading from "../Heading";
import P from "../P";
import React from "react";

const ComparisonEqual = () => {
  return (
    <>
      <P>
        The comparison operator evaluates the left-hand value, to the left. This
        operation returns a boolean value and will not try to coerce the
        left-hand type to match the right-hand type.
      </P>
      <P>
        This means that if I have an integer, 2, and I want to compare that to a
        string "2", they will result in a <strong>true</strong> boolean value
        because it's comparing the literal value and not the type of the value
        as well.
      </P>

      <CodeBlock>{`2 == "2" // true`}</CodeBlock>

      <Heading>Comparing strings</Heading>

      <P>
        Like numbers, you can also compare strings where using the comparison
        operator will check that each string is the same.
      </P>

      <CodeBlock>{`"2" == "2" // true`}</CodeBlock>
    </>
  );
};

export default ComparisonEqual;
