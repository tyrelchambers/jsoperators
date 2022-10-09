import {
  __commonJS
} from "/build/_shared/chunk-42Z7WWMI.js";

// node_modules/highlight.js/lib/languages/haskell.js
var require_haskell = __commonJS({
  "node_modules/highlight.js/lib/languages/haskell.js"(exports, module) {
    function haskell(hljs) {
      const COMMENT = {
        variants: [
          hljs.COMMENT("--", "$"),
          hljs.COMMENT(
            /\{-/,
            /-\}/,
            {
              contains: ["self"]
            }
          )
        ]
      };
      const PRAGMA = {
        className: "meta",
        begin: /\{-#/,
        end: /#-\}/
      };
      const PREPROCESSOR = {
        className: "meta",
        begin: "^#",
        end: "$"
      };
      const CONSTRUCTOR = {
        className: "type",
        begin: "\\b[A-Z][\\w']*",
        relevance: 0
      };
      const LIST = {
        begin: "\\(",
        end: "\\)",
        illegal: '"',
        contains: [
          PRAGMA,
          PREPROCESSOR,
          {
            className: "type",
            begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
          },
          hljs.inherit(hljs.TITLE_MODE, {
            begin: "[_a-z][\\w']*"
          }),
          COMMENT
        ]
      };
      const RECORD = {
        begin: /\{/,
        end: /\}/,
        contains: LIST.contains
      };
      return {
        name: "Haskell",
        aliases: ["hs"],
        keywords: "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
        contains: [
          {
            beginKeywords: "module",
            end: "where",
            keywords: "module where",
            contains: [
              LIST,
              COMMENT
            ],
            illegal: "\\W\\.|;"
          },
          {
            begin: "\\bimport\\b",
            end: "$",
            keywords: "import qualified as hiding",
            contains: [
              LIST,
              COMMENT
            ],
            illegal: "\\W\\.|;"
          },
          {
            className: "class",
            begin: "^(\\s*)?(class|instance)\\b",
            end: "where",
            keywords: "class family instance where",
            contains: [
              CONSTRUCTOR,
              LIST,
              COMMENT
            ]
          },
          {
            className: "class",
            begin: "\\b(data|(new)?type)\\b",
            end: "$",
            keywords: "data family type newtype deriving",
            contains: [
              PRAGMA,
              CONSTRUCTOR,
              LIST,
              RECORD,
              COMMENT
            ]
          },
          {
            beginKeywords: "default",
            end: "$",
            contains: [
              CONSTRUCTOR,
              LIST,
              COMMENT
            ]
          },
          {
            beginKeywords: "infix infixl infixr",
            end: "$",
            contains: [
              hljs.C_NUMBER_MODE,
              COMMENT
            ]
          },
          {
            begin: "\\bforeign\\b",
            end: "$",
            keywords: "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
            contains: [
              CONSTRUCTOR,
              hljs.QUOTE_STRING_MODE,
              COMMENT
            ]
          },
          {
            className: "meta",
            begin: "#!\\/usr\\/bin\\/env runhaskell",
            end: "$"
          },
          PRAGMA,
          PREPROCESSOR,
          hljs.QUOTE_STRING_MODE,
          hljs.C_NUMBER_MODE,
          CONSTRUCTOR,
          hljs.inherit(hljs.TITLE_MODE, {
            begin: "^[_a-z][\\w']*"
          }),
          COMMENT,
          {
            begin: "->|<-"
          }
        ]
      };
    }
    module.exports = haskell;
  }
});
export default require_haskell();
//# sourceMappingURL=/build/_shared/haskell-KLNJOIG5.js.map
