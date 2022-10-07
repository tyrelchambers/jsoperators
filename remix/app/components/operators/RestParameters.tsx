import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";
import { Link } from "@tanstack/react-location";

const AssignmentDivision = () => {
  return (
    <>
      <P>
        This operator packs multiple parameters into one array variable 
      </P>
      <P>
        *not to get confused with {" "}
        <Link to="/?name=Spread syntax" className="text-indigo-500 underline">
          spread syntax
        </Link>{" "}
      </P>
      <CodeBlock>{
        `function greet(spouseName, ...childrenNames){
  console.log(\`\${spouseName} is my spouse\`);
  
  //print only if non-empty array or second argument passed
  if(childrenNames.length > 0) 
    console.log(\`Our children: \${childrenNames}\`);
}
const children = ['Al', 'Bill', 'Chloe'];
greet('Jane', children)
greet('Jane', 'Al', 'Bill', 'Chloe')
//will print twice:
// Jane is my spouse
// Our children: Al,Bill,Chloe`
      }</CodeBlock>
    </>
  );
};




export default AssignmentDivision;
