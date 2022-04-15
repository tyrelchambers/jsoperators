import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";

const Ternary = () => {
  return (
    <>
      <P>
        The ternary operator is a different, often more concise, way of writing
        an <strong>if/else</strong> conditional.
      </P>
      <P>
        If you'd like, Tyrel Chambers wrote an article about the{" "}
        <a
          className="text-indigo-500 underline"
          href="https://tyrelchambers.com/blog/what-is-a-ternary-operator-in-javascript"
        >
          ternary operator
        </a>
        .
      </P>

      <CodeBlock>{`const colour = "blue"
colour === "blue" ? "It's blue!" : "it's red!"`}</CodeBlock>
    </>
  );
};

export default Ternary;
