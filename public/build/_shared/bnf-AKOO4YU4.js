import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/highlight.js/lib/languages/bnf.js
var require_bnf = __commonJS({
  "node_modules/highlight.js/lib/languages/bnf.js"(exports, module) {
    function bnf(hljs) {
      return {
        name: "Backus\u2013Naur Form",
        contains: [
          {
            className: "attribute",
            begin: /</,
            end: />/
          },
          {
            begin: /::=/,
            end: /$/,
            contains: [
              {
                begin: /</,
                end: />/
              },
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE
            ]
          }
        ]
      };
    }
    module.exports = bnf;
  }
});
export default require_bnf();
//# sourceMappingURL=/build/_shared/bnf-AKOO4YU4.js.map
