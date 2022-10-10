import { Operator } from "~/types";

// Each operator here should have an associated .md file in the operators folder
export const operators: Operator[] = [
  {
    name: "Addition",
    filename: "addition",
    icon: "+",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition",
  },
  {
    name: "Subtraction",
    icon: "-",
    filename: "subtraction",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction",
  },
  {
    name: "Multiplication",
    icon: "*",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication",
    filename: "multiplication",
  },
  {
    name: "Division",
    icon: "/",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division",
    filename: "division",
  },
  {
    name: "Remainder",
    icon: "%",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder",
    filename: "remainder",
  },
  {
    name: "Exponentiation",
    icon: "**",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation_operator",
    filename: "Exponentiation",
  },
  {
    name: "Bitwise and",
    icon: "&",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND",
    filename: "bitwise-and",
  },
  {
    name: "Bitwise or",
    icon: "|",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR",
    filename: "bitwise-or",
  },
  {
    name: "Bitwise xor",
    icon: "^",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR",
    filename: "bitwise-xor",
  },
  {
    name: "Bitwise not",
    icon: "~",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT",
    filename: "bitwise-not",
  },
  {
    name: "Bitwise shift left",
    icon: "<<",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_shift_left",
    filename: "bitwise-shift-left",
  },
  {
    name: "Bitwise shift right",
    filename: "bitwise-shift-right",
    icon: ">>",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_shift_right",
  },
  {
    name: "Unsigned right shift",
    filename: "unsigned-right-shift",
    icon: ">>>",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift",
  },
  {
    name: "Comparison",
    filename: "comparison",
    icon: "==",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality",
  },
  {
    name: "Inequality",
    filename: "comparison-not-equal",
    icon: "!=",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality",
  },
  {
    name: "Less than",
    filename: "less-than",
    icon: "<",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than",
  },
  {
    name: "Less than or equal",
    filename: "less-than-equal",
    icon: "<=",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal",
  },
  {
    name: "Greater than",
    filename: "greater-than",
    icon: ">",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than",
  },
  {
    name: "Greater than or equal",
    filename: "greater-than-equal",
    icon: ">=",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal",
  },
  {
    name: "Strict comparison",
    filename: "comparison-strict-equal",
    icon: "===",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality",
  },
  {
    name: "Strict inequality",
    filename: "strict-not-equal",
    icon: "!==",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality",
  },
  {
    name: "Logical and",
    filename: "logical-and",
    icon: "&&",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND",
  },
  {
    name: "Logical or",
    filename: "logical-or",
    icon: "||",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR",
  },
  {
    name: "Logical not",
    filename: "logical-not",
    icon: "!",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT",
  },
  {
    name: "Ternary",
    filename: "ternary",
    icon: "?",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator",
  },
  {
    name: "Assignment",
    filename: "assignment",
    icon: "=",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment",
  },
  {
    name: "Assignment addition",
    filename: "assignment-addition",
    icon: "+=",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment",
  },
  {
    name: "Assignment subtraction",
    filename: "assignment-subtraction",
    icon: "-=",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment",
  },

  {
    name: "Assignment multiplication",
    filename: "assignment-multiplication",
    icon: "*=",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment",
  },
  {
    name: "Assignment division",
    filename: "assignment-division",
    icon: "/=",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment",
  },
  {
    name: "Optional chaining",
    filename: "optional-chaining",
    icon: "?.",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",
  },
  {
    name: "Spread syntax",
    filename: "spread-syntax",
    icon: "...",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
  },
  {
    name: "Rest parameters",
    filename: "rest-parameters",
    icon: "...",
    moreInfo:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters",
  },
];
