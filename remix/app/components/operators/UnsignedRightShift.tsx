import P from "../P";
import React from "react";

const UnsignedRightShift = () => {
  return (
    <>
      <P>
        The unsigned right shift operator will shift the first number the
        specified number of digits to the right. Any excess digits are discarded
        and the 32-bit integer will have zero bits fill in on the left side for
        every discarded digit on the right.
      </P>
    </>
  );
};

export default UnsignedRightShift;
