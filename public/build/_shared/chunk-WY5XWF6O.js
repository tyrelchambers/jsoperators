import {
  __commonJS
} from "/build/_shared/chunk-42Z7WWMI.js";

// node_modules/refractor/lang/less.js
var require_less = __commonJS({
  "node_modules/refractor/lang/less.js"(exports, module) {
    module.exports = less;
    less.displayName = "less";
    less.aliases = [];
    function less(Prism) {
      Prism.languages.less = Prism.languages.extend("css", {
        comment: [
          /\/\*[\s\S]*?\*\//,
          {
            pattern: /(^|[^\\])\/\/.*/,
            lookbehind: true
          }
        ],
        atrule: {
          pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
          inside: {
            punctuation: /[:()]/
          }
        },
        selector: {
          pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
          inside: {
            variable: /@+[\w-]+/
          }
        },
        property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
        operator: /[+\-*\/]/
      });
      Prism.languages.insertBefore("less", "property", {
        variable: [
          {
            pattern: /@[\w-]+\s*:/,
            inside: {
              punctuation: /:/
            }
          },
          /@@?[\w-]+/
        ],
        "mixin-usage": {
          pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
          lookbehind: true,
          alias: "function"
        }
      });
    }
  }
});

export {
  require_less
};
//# sourceMappingURL=/build/_shared/chunk-WY5XWF6O.js.map
