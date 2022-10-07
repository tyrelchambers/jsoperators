import Addition from "../components/operators/Addition";
import Assignment from "../components/operators/Assignment";
import AssignmentAddition from "../components/operators/AssignmentAddition";
import AssignmentDivision from "../components/operators/AssignmentDivision";
import AssignmentMultiplication from "../components/operators/AssignmentMultiplication";
import AssignmentSubtraction from "../components/operators/AssignmentSubtraction";
import BitwiseAnd from "../components/operators/BitwiseAnd";
import BitwiseNot from "../components/operators/BitwiseNot";
import BitwiseOr from "../components/operators/BitwiseOr";
import BitwiseShiftLeft from "../components/operators/BitwiseShiftLeft";
import BitwiseShiftRight from "../components/operators/BitwiseShiftRight";
import BitwiseXor from "../components/operators/BitwiseXor";
import ComparisonEqual from "../components/operators/ComparisonEqual";
import ComparisonNotEqual from "../components/operators/ComparisonNotEqual";
import ComparisonStrictEqual from "../components/operators/ComparisonStrictEqual";
import Division from "../components/operators/Division";
import Exponent from "../components/operators/Exponent";
import GreaterThan from "../components/operators/GreaterThan";
import GreaterThanEqual from "../components/operators/GreaterThanEqual";
import LessThan from "../components/operators/LessThan";
import LessThanEqual from "../components/operators/LessThanEqual";
import LogicalAnd from "../components/operators/LogicalAnd";
import LogicalNot from "../components/operators/LogicalNot";
import LogicalOr from "../components/operators/LogicalOr";
import Multiplication from "../components/operators/Multiplication";
import { Operator } from "../../../src/types";
import OptionalChaining from "../components/operators/OptionalChaining";
import Remainder from "../components/operators/Remainder";
import StrictNotEqual from "../components/operators/StrictNotEqual";
import Subtraction from "../components/operators/Subtraction";
import Ternary from "../components/operators/Ternary";
import UnsignedRightShift from "../components/operators/UnsignedRightShift";
import Spread from "../components/operators/Spread";
import RestParameters from "../components/operators/RestParameters";

export const operators: Operator[] = [
  {
    name: "Addition",
    component: <Addition />,
    icon: "+",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition",
  },
  {
    name: "Subtraction",
    component: <Subtraction />,
    icon: "-",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction",
  },
  {
    name: "Multiplication",
    component: <Multiplication />,
    icon: "*",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication",
  },
  {
    name: "Division",
    component: <Division />,
    icon: "/",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division",
  },
  {
    name: "Remainder",
    component: <Remainder />,
    icon: "%",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder",
  },
  {
    name: "Exponentiation",
    component: <Exponent />,
    icon: "**",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation_operator",
  },
  {
    name: "Bitwise and",
    component: <BitwiseAnd />,
    icon: "&",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND",
  },
  {
    name: "Bitwise or",
    component: <BitwiseOr />,
    icon: "|",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR",
  },
  {
    name: "Bitwise xor",
    component: <BitwiseXor />,
    icon: "^",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR",
  },
  {
    name: "Bitwise not",
    component: <BitwiseNot />,
    icon: "~",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT",
  },
  {
    name: "Bitwise shift left",
    component: <BitwiseShiftLeft />,
    icon: "<<",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_shift_left",
  },
  {
    name: "Bitwise shift right",
    component: <BitwiseShiftRight />,
    icon: ">>",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_shift_right",
  },
  {
    name: "Unsigned right shift",
    component: <UnsignedRightShift />,
    icon: ">>>",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift",
  },
  {
    name: "Comparison",
    component: <ComparisonEqual />,
    icon: "==",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality",
  },
  {
    name: "Inequality",
    component: <ComparisonNotEqual />,
    icon: "!=",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality",
  },
  {
    name: "Less than",
    component: <LessThan />,
    icon: "<",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than",
  },
  {
    name: "Less than or equal",
    component: <LessThanEqual />,
    icon: "<=",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal",
  },
  {
    name: "Greater than",
    component: <GreaterThan />,
    icon: ">",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than",
  },
  {
    name: "Greater than or equal",
    component: <GreaterThanEqual />,
    icon: ">=",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal",
  },
  {
    name: "Strict comparison",
    component: <ComparisonStrictEqual />,
    icon: "===",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality",
  },
  {
    name: "Strict inequality",
    component: <StrictNotEqual />,
    icon: "!==",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality",
  },
  {
    name: "Logical and",
    component: <LogicalAnd />,
    icon: "&&",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND",
  },
  {
    name: "Logical or",
    component: <LogicalOr />,
    icon: "||",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR",
  },
  {
    name: "Logical not",
    component: <LogicalNot />,
    icon: "!",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT",
  },
  {
    name: "Ternary",
    component: <Ternary />,
    icon: "?",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator",
  },
  {
    name: "Assignment",
    component: <Assignment />,
    icon: "=",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment",
  },
  {
    name: "Assignment addition",
    component: <AssignmentAddition />,
    icon: "+=",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment",
  },
  {
    name: "Assignment subtraction",
    component: <AssignmentSubtraction />,
    icon: "-=",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment",
  },

  {
    name: "Assignment multiplication",
    component: <AssignmentMultiplication />,
    icon: "*=",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment",
  },
  {
    name: "Assignment division",
    component: <AssignmentDivision />,
    icon: "/=",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment",
  },
  {
    name: "Optional chaining",
    component: <OptionalChaining />,
    icon: "?.",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",
  },
  {
    name: "Spread syntax",
    component: <Spread />,
    icon: "...",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
  },
  {
    name: "Rest parameters",
    component: <RestParameters />,
    icon: "...",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters",
  },
];
