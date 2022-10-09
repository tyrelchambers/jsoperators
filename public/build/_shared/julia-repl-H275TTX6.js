import {
  __commonJS
} from "/build/_shared/chunk-42Z7WWMI.js";

// node_modules/highlight.js/lib/languages/julia-repl.js
var require_julia_repl = __commonJS({
  "node_modules/highlight.js/lib/languages/julia-repl.js"(exports, module) {
    function juliaRepl(hljs) {
      return {
        name: "Julia REPL",
        contains: [
          {
            className: "meta",
            begin: /^julia>/,
            relevance: 10,
            starts: {
              end: /^(?![ ]{6})/,
              subLanguage: "julia"
            },
            aliases: ["jldoctest"]
          }
        ]
      };
    }
    module.exports = juliaRepl;
  }
});
export default require_julia_repl();
//# sourceMappingURL=/build/_shared/julia-repl-H275TTX6.js.map
