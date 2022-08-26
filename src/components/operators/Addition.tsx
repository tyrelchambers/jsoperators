import CodeBlock from "../CodeBlock";
import Heading from "../Heading";
import P from "../P";
import React from "react";

const Addition = () => {
  return (
    <>
      <Heading>Numbers</Heading>
      <P>
        This addition operator servers two purposes: one for mathematical
        equations and one for concatinating strings.
      </P>

      <P>
        Another weird example of addition happens when you add a{" "}
        <strong>boolean</strong> to a <strong>number</strong>.
      </P>

      <CodeBlock>console.log(1 + true); // 2</CodeBlock>

      <P>
        This happens because in computer-speak, <strong>true</strong> represents
        a 1 and <strong>false</strong> represents a 0. Remember the video game
        consoles of the old days (Playstation 2) specifically or even modern
        computer power supplies, there is a "1" and a "0" on the power switch to
        represent on and off.
      </P>
      <P>
        In our example, <strong>true</strong> is actually a "1". Just to further
        explain this, look at this example showing how <strong>false</strong> is
        used.
      </P>

      <CodeBlock>console.log(1 + false); // 1</CodeBlock>

      <Heading>Strings</Heading>

      <P>
        If a number and a string are used together, they actually behave a
        little differently.
      </P>

      <CodeBlock>console.log(1 + '1'); // 11</CodeBlock>
      <P>It literally adds the number to the string.</P>
    </>
  );
};

export default Addition;
