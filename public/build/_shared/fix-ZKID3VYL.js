import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/highlight.js/lib/languages/fix.js
var require_fix = __commonJS({
  "node_modules/highlight.js/lib/languages/fix.js"(exports, module) {
    function fix(hljs) {
      return {
        name: "FIX",
        contains: [{
          begin: /[^\u2401\u0001]+/,
          end: /[\u2401\u0001]/,
          excludeEnd: true,
          returnBegin: true,
          returnEnd: false,
          contains: [
            {
              begin: /([^\u2401\u0001=]+)/,
              end: /=([^\u2401\u0001=]+)/,
              returnEnd: true,
              returnBegin: false,
              className: "attr"
            },
            {
              begin: /=/,
              end: /([\u2401\u0001])/,
              excludeEnd: true,
              excludeBegin: true,
              className: "string"
            }
          ]
        }],
        case_insensitive: true
      };
    }
    module.exports = fix;
  }
});
export default require_fix();
//# sourceMappingURL=/build/_shared/fix-ZKID3VYL.js.map
