import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/highlight.js/lib/languages/zephir.js
var require_zephir = __commonJS({
  "node_modules/highlight.js/lib/languages/zephir.js"(exports, module) {
    function zephir(hljs) {
      const STRING = {
        className: "string",
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
          hljs.inherit(hljs.APOS_STRING_MODE, {
            illegal: null
          }),
          hljs.inherit(hljs.QUOTE_STRING_MODE, {
            illegal: null
          })
        ]
      };
      const TITLE_MODE = hljs.UNDERSCORE_TITLE_MODE;
      const NUMBER = {
        variants: [
          hljs.BINARY_NUMBER_MODE,
          hljs.C_NUMBER_MODE
        ]
      };
      const KEYWORDS = "namespace class interface use extends function return abstract final public protected private static deprecated throw try catch Exception echo empty isset instanceof unset let var new const self require if else elseif switch case default do while loop for continue break likely unlikely __LINE__ __FILE__ __DIR__ __FUNCTION__ __CLASS__ __TRAIT__ __METHOD__ __NAMESPACE__ array boolean float double integer object resource string char long unsigned bool int uint ulong uchar true false null undefined";
      return {
        name: "Zephir",
        aliases: ["zep"],
        keywords: KEYWORDS,
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.COMMENT(
            /\/\*/,
            /\*\//,
            {
              contains: [
                {
                  className: "doctag",
                  begin: /@[A-Za-z]+/
                }
              ]
            }
          ),
          {
            className: "string",
            begin: /<<<['"]?\w+['"]?$/,
            end: /^\w+;/,
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          {
            begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
          },
          {
            className: "function",
            beginKeywords: "function fn",
            end: /[;{]/,
            excludeEnd: true,
            illegal: /\$|\[|%/,
            contains: [
              TITLE_MODE,
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: KEYWORDS,
                contains: [
                  "self",
                  hljs.C_BLOCK_COMMENT_MODE,
                  STRING,
                  NUMBER
                ]
              }
            ]
          },
          {
            className: "class",
            beginKeywords: "class interface",
            end: /\{/,
            excludeEnd: true,
            illegal: /[:($"]/,
            contains: [
              {
                beginKeywords: "extends implements"
              },
              TITLE_MODE
            ]
          },
          {
            beginKeywords: "namespace",
            end: /;/,
            illegal: /[.']/,
            contains: [TITLE_MODE]
          },
          {
            beginKeywords: "use",
            end: /;/,
            contains: [TITLE_MODE]
          },
          {
            begin: /=>/
          },
          STRING,
          NUMBER
        ]
      };
    }
    module.exports = zephir;
  }
});
export default require_zephir();
//# sourceMappingURL=/build/_shared/zephir-DKHKOTBG.js.map
