import {
  __commonJS
} from "/build/_shared/chunk-42Z7WWMI.js";

// node_modules/highlight.js/lib/languages/capnproto.js
var require_capnproto = __commonJS({
  "node_modules/highlight.js/lib/languages/capnproto.js"(exports, module) {
    function capnproto(hljs) {
      return {
        name: "Cap\u2019n Proto",
        aliases: ["capnp"],
        keywords: {
          keyword: "struct enum interface union group import using const annotation extends in of on as with from fixed",
          built_in: "Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 Text Data AnyPointer AnyStruct Capability List",
          literal: "true false"
        },
        contains: [
          hljs.QUOTE_STRING_MODE,
          hljs.NUMBER_MODE,
          hljs.HASH_COMMENT_MODE,
          {
            className: "meta",
            begin: /@0x[\w\d]{16};/,
            illegal: /\n/
          },
          {
            className: "symbol",
            begin: /@\d+\b/
          },
          {
            className: "class",
            beginKeywords: "struct enum",
            end: /\{/,
            illegal: /\n/,
            contains: [hljs.inherit(hljs.TITLE_MODE, {
              starts: {
                endsWithParent: true,
                excludeEnd: true
              }
            })]
          },
          {
            className: "class",
            beginKeywords: "interface",
            end: /\{/,
            illegal: /\n/,
            contains: [hljs.inherit(hljs.TITLE_MODE, {
              starts: {
                endsWithParent: true,
                excludeEnd: true
              }
            })]
          }
        ]
      };
    }
    module.exports = capnproto;
  }
});
export default require_capnproto();
//# sourceMappingURL=/build/_shared/capnproto-33HZCUAR.js.map
