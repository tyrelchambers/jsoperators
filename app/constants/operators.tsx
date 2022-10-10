import { Operator } from "~/types";
const ModzillaUrl =
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference";

// Each operator here should have an associated .md file in the operators folder
export const operators: Operator[] = [
  {
    name: "Addition",
    filename: "addition",
    icon: "+",
    moreInfo: `${ModzillaUrl}/Operators/Addition`,
  },
  {
    name: "Subtraction",
    icon: "-",
    filename: "subtraction",
    moreInfo: `${ModzillaUrl}/Operators/Subtraction`,
  },
  {
    name: "Multiplication",
    icon: "*",
    moreInfo: `${ModzillaUrl}/Operators/Multiplication`,
    filename: "multiplication",
  },
  {
    name: "Division",
    icon: "/",
    moreInfo: `${ModzillaUrl}/Operators/Division`,
    filename: "division",
  },
  {
    name: "Remainder",
    icon: "%",
    moreInfo: `${ModzillaUrl}/Operators/Remainder`,
    filename: "remainder",
  },
  {
    name: "Exponentiation",
    icon: "**",
    moreInfo: `${ModzillaUrl}/Operators/Exponentiation_operator`,
    filename: "Exponentiation",
  },
  {
    name: "Bitwise and",
    icon: "&",
    moreInfo: `${ModzillaUrl}/Operators/Bitwise_AND`,
    filename: "bitwise-and",
  },
  {
    name: "Bitwise or",
    icon: "|",
    moreInfo: `${ModzillaUrl}/Operators/Bitwise_OR`,
    filename: "bitwise-or",
  },
  {
    name: "Bitwise xor",
    icon: "^",
    moreInfo: `${ModzillaUrl}/Operators/Bitwise_XOR`,
    filename: "bitwise-xor",
  },
  {
    name: "Bitwise not",
    icon: "~",
    moreInfo: `${ModzillaUrl}/Operators/Bitwise_NOT`,
    filename: "bitwise-not",
  },
  {
    name: "Bitwise shift left",
    icon: "<<",
    moreInfo: `${ModzillaUrl}/Operators/Bitwise_shift_left`,
    filename: "bitwise-shift-left",
  },
  {
    name: "Bitwise shift right",
    filename: "bitwise-shift-right",
    icon: ">>",
    moreInfo: `${ModzillaUrl}/Operators/Bitwise_shift_right`,
  },
  {
    name: "Unsigned right shift",
    filename: "unsigned-right-shift",
    icon: ">>>",
    moreInfo: `${ModzillaUrl}/Operators/Unsigned_right_shift`,
  },
  {
    name: "Comparison",
    filename: "comparison",
    icon: "==",
    moreInfo: `${ModzillaUrl}/Operators/Equality`,
  },
  {
    name: "Inequality",
    filename: "comparison-not-equal",
    icon: "!=",
    moreInfo: `${ModzillaUrl}/Operators/Inequality`,
  },
  {
    name: "Less than",
    filename: "less-than",
    icon: "<",
    moreInfo: `${ModzillaUrl}/Operators/Less_than`,
  },
  {
    name: "Less than or equal",
    filename: "less-than-equal",
    icon: "<=",
    moreInfo: `${ModzillaUrl}/Operators/Less_than_or_equal`,
  },
  {
    name: "Greater than",
    filename: "greater-than",
    icon: ">",
    moreInfo: `${ModzillaUrl}/Operators/Greater_than`,
  },
  {
    name: "Greater than or equal",
    filename: "greater-than-equal",
    icon: ">=",
    moreInfo: `${ModzillaUrl}/Operators/Greater_than_or_equal`,
  },
  {
    name: "Strict comparison",
    filename: "comparison-strict-equal",
    icon: "===",
    moreInfo: `${ModzillaUrl}/Operators/Strict_equality`,
  },
  {
    name: "Strict inequality",
    filename: "strict-not-equal",
    icon: "!==",
    moreInfo: `${ModzillaUrl}/Operators/Strict_inequality`,
  },
  {
    name: "Logical and",
    filename: "logical-and",
    icon: "&&",
    moreInfo: `${ModzillaUrl}/Operators/Logical_AND`,
  },
  {
    name: "Logical or",
    filename: "logical-or",
    icon: "||",
    moreInfo: `${ModzillaUrl}/Operators/Logical_OR`,
  },
  {
    name: "Logical not",
    filename: "logical-not",
    icon: "!",
    moreInfo: `${ModzillaUrl}/Operators/Logical_NOT`,
  },
  {
    name: "Ternary",
    filename: "ternary",
    icon: "?",
    moreInfo: `${ModzillaUrl}/Operators/Conditional_Operator`,
  },
  {
    name: "Assignment",
    filename: "assignment",
    icon: "=",
    moreInfo: `${ModzillaUrl}/Operators/Assignment`,
  },
  {
    name: "Assignment addition",
    filename: "assignment-addition",
    icon: "+=",
    moreInfo: `${ModzillaUrl}/Operators/Addition_assignment`,
  },
  {
    name: "Assignment subtraction",
    filename: "assignment-subtraction",
    icon: "-=",
    moreInfo: `${ModzillaUrl}/Operators/Subtraction_assignment`,
  },

  {
    name: "Assignment multiplication",
    filename: "assignment-multiplication",
    icon: "*=",
    moreInfo: `${ModzillaUrl}/Operators/Multiplication_assignment`,
  },
  {
    name: "Assignment division",
    filename: "assignment-division",
    icon: "/=",
    moreInfo: `${ModzillaUrl}/Operators/Division_assignment`,
  },
  {
    name: "Optional chaining",
    filename: "optional-chaining",
    icon: "?.",
    moreInfo: `${ModzillaUrl}/Operators/Optional_chaining`,
  },
  {
    name: "Spread syntax",
    filename: "spread-syntax",
    icon: "...",
    moreInfo: `${ModzillaUrl}/Operators/Spread_syntax`,
  },
  {
    name: "Rest parameters",
    filename: "rest-parameters",
    icon: "...",
    moreInfo: `${ModzillaUrl}/Functions/rest_parameters`,
  },
];
