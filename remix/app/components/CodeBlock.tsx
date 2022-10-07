import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeBlock: React.FC = ({ children }) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      customStyle={{
        borderRadius: "8px",
        height: "100%",
      }}
      wrapLongLines={true}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
