import {
  __commonJS
} from "/build/_shared/chunk-42Z7WWMI.js";

// node_modules/refractor/lang/yang.js
var require_yang = __commonJS({
  "node_modules/refractor/lang/yang.js"(exports, module) {
    module.exports = yang;
    yang.displayName = "yang";
    yang.aliases = [];
    function yang(Prism) {
      Prism.languages.yang = {
        comment: /\/\*[\s\S]*?\*\/|\/\/.*/,
        string: {
          pattern: /"(?:[^\\"]|\\.)*"|'[^']*'/,
          greedy: true
        },
        keyword: {
          pattern: /(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,
          lookbehind: true
        },
        namespace: {
          pattern: /(\s)[a-z_][\w.-]*(?=:)/i,
          lookbehind: true
        },
        boolean: /\b(?:false|true)\b/,
        operator: /\+/,
        punctuation: /[{};:]/
      };
    }
  }
});

export {
  require_yang
};
//# sourceMappingURL=/build/_shared/chunk-M4BTPEWZ.js.map
