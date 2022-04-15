import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const GreaterThan = () => {
  return (
    <>
      <P>
        The greater than operator will check if one value is greater than the
        other and if it is, it'll return a <strong>true</strong> value.
      </P>

      <P>
        This operator also works with strings and will evaluate each individual
        letter in a word to it's corresponding letter in the other word.
      </P>

      <CodeBlock>{`console.log(1 > 2) // false
console.log(2 > 1) // true
console.log('aa' > 'ab') // false`}</CodeBlock>
    </>
  );
};

export default GreaterThan;
