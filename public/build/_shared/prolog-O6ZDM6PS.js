import {
  __commonJS
} from "/build/_shared/chunk-42Z7WWMI.js";

// node_modules/highlight.js/lib/languages/prolog.js
var require_prolog = __commonJS({
  "node_modules/highlight.js/lib/languages/prolog.js"(exports, module) {
    function prolog(hljs) {
      const ATOM = {
        begin: /[a-z][A-Za-z0-9_]*/,
        relevance: 0
      };
      const VAR = {
        className: "symbol",
        variants: [
          {
            begin: /[A-Z][a-zA-Z0-9_]*/
          },
          {
            begin: /_[A-Za-z0-9_]*/
          }
        ],
        relevance: 0
      };
      const PARENTED = {
        begin: /\(/,
        end: /\)/,
        relevance: 0
      };
      const LIST = {
        begin: /\[/,
        end: /\]/
      };
      const LINE_COMMENT = {
        className: "comment",
        begin: /%/,
        end: /$/,
        contains: [hljs.PHRASAL_WORDS_MODE]
      };
      const BACKTICK_STRING = {
        className: "string",
        begin: /`/,
        end: /`/,
        contains: [hljs.BACKSLASH_ESCAPE]
      };
      const CHAR_CODE = {
        className: "string",
        begin: /0'(\\'|.)/
      };
      const SPACE_CODE = {
        className: "string",
        begin: /0'\\s/
      };
      const PRED_OP = {
        begin: /:-/
      };
      const inner = [
        ATOM,
        VAR,
        PARENTED,
        PRED_OP,
        LIST,
        LINE_COMMENT,
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.QUOTE_STRING_MODE,
        hljs.APOS_STRING_MODE,
        BACKTICK_STRING,
        CHAR_CODE,
        SPACE_CODE,
        hljs.C_NUMBER_MODE
      ];
      PARENTED.contains = inner;
      LIST.contains = inner;
      return {
        name: "Prolog",
        contains: inner.concat([
          {
            begin: /\.$/
          }
        ])
      };
    }
    module.exports = prolog;
  }
});
export default require_prolog();
//# sourceMappingURL=/build/_shared/prolog-O6ZDM6PS.js.map
