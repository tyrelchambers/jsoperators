import CodeBlock from "../CodeBlock";
import P from "../P";
import React from "react";
import { Link } from "@tanstack/react-location";

const AssignmentDivision = () => {
  return (
    <>
      <P>
        This operator expands an iterable like an array or a string in every place that can get multiple values 
      </P>
      <P>
        *not to get confused with {" "}
        <Link to="/?name=Rest parameters" className="text-indigo-500 underline">
          rest parameters
        </Link>{" "}
      </P>
      <CodeBlock>{
        `let arr1 = [1,2,3];
let arr2 = [4,5,6];
let combined = [...arr1, ...arr2];
//combined now equals [1,2,3,4,5,6]`
      }</CodeBlock>
      <P>
        It works similarly with objects too
      </P>
      <CodeBlock>{
        `let obj1 = {a: 1, b:2, c:3};
let obj2 = {d: 4, e:5, f:6};
let combined = {...obj1, ...obj2};
//combined now equals {a: 1, b:2, c:3, d: 4, e:5, f:6};`
      }</CodeBlock>
      <P>
        You can use it as function arguments
      </P>
      <CodeBlock>{
        `function greet(day, month, year){
  console.log(\`your birthday is: \${month}/\${day}/\${year} !\`);
}
let birthday = [29,7,1987]
greet(...birthday);
//will print: your birthday is: 7/29/1987 !`
      }</CodeBlock>
    </>
  );
};




export default AssignmentDivision;
