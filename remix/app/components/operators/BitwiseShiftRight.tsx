import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const BitwiseShiftRight = () => {
  return (
    <>
      <P>
        The bitwise shift right operator will shift the specified number of bits
        to the right. In the example below, the left-hand 2 will have it's bits
        shifted 2 bits to the right because the right-hand number is a 2. In the
        second example, they will be shifted 3 bits.
      </P>
      <P>Excess bits shifted to the right are discarded.</P>x
    </>
  );
};

export default BitwiseShiftRight;
