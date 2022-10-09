import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/highlight.js/lib/languages/node-repl.js
var require_node_repl = __commonJS({
  "node_modules/highlight.js/lib/languages/node-repl.js"(exports, module) {
    function nodeRepl(hljs) {
      return {
        name: "Node REPL",
        contains: [
          {
            className: "meta",
            starts: {
              end: / |$/,
              starts: {
                end: "$",
                subLanguage: "javascript"
              }
            },
            variants: [
              {
                begin: /^>(?=[ ]|$)/
              },
              {
                begin: /^\.\.\.(?=[ ]|$)/
              }
            ]
          }
        ]
      };
    }
    module.exports = nodeRepl;
  }
});
export default require_node_repl();
//# sourceMappingURL=/build/_shared/node-repl-II5KPKMS.js.map
