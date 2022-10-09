import {
  __commonJS
} from "/build/_shared/chunk-42Z7WWMI.js";

// node_modules/refractor/lang/elm.js
var require_elm = __commonJS({
  "node_modules/refractor/lang/elm.js"(exports, module) {
    module.exports = elm;
    elm.displayName = "elm";
    elm.aliases = [];
    function elm(Prism) {
      Prism.languages.elm = {
        comment: /--.*|\{-[\s\S]*?-\}/,
        char: {
          pattern: /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+|u\{[0-9a-fA-F]+\}))'/,
          greedy: true
        },
        string: [
          {
            pattern: /"""[\s\S]*?"""/,
            greedy: true
          },
          {
            pattern: /"(?:[^\\"\r\n]|\\.)*"/,
            greedy: true
          }
        ],
        "import-statement": {
          pattern: /(^[\t ]*)import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+(?:[A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,
          lookbehind: true,
          inside: {
            keyword: /\b(?:as|exposing|import)\b/
          }
        },
        keyword: /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,
        builtin: /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,
        number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,
        operator: /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,
        hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,
        constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,
        punctuation: /[{}[\]|(),.:]/
      };
    }
  }
});

export {
  require_elm
};
//# sourceMappingURL=/build/_shared/chunk-TCAWJTMZ.js.map
