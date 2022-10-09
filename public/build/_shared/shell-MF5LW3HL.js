import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/highlight.js/lib/languages/shell.js
var require_shell = __commonJS({
  "node_modules/highlight.js/lib/languages/shell.js"(exports, module) {
    function shell(hljs) {
      return {
        name: "Shell Session",
        aliases: ["console"],
        contains: [
          {
            className: "meta",
            begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,
            starts: {
              end: /[^\\](?=\s*$)/,
              subLanguage: "bash"
            }
          }
        ]
      };
    }
    module.exports = shell;
  }
});
export default require_shell();
//# sourceMappingURL=/build/_shared/shell-MF5LW3HL.js.map
