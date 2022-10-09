import {
  __commonJS
} from "/build/_shared/chunk-42Z7WWMI.js";

// node_modules/highlight.js/lib/languages/apache.js
var require_apache = __commonJS({
  "node_modules/highlight.js/lib/languages/apache.js"(exports, module) {
    function apache(hljs) {
      const NUMBER_REF = {
        className: "number",
        begin: /[$%]\d+/
      };
      const NUMBER = {
        className: "number",
        begin: /\d+/
      };
      const IP_ADDRESS = {
        className: "number",
        begin: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/
      };
      const PORT_NUMBER = {
        className: "number",
        begin: /:\d{1,5}/
      };
      return {
        name: "Apache config",
        aliases: ["apacheconf"],
        case_insensitive: true,
        contains: [
          hljs.HASH_COMMENT_MODE,
          {
            className: "section",
            begin: /<\/?/,
            end: />/,
            contains: [
              IP_ADDRESS,
              PORT_NUMBER,
              hljs.inherit(hljs.QUOTE_STRING_MODE, { relevance: 0 })
            ]
          },
          {
            className: "attribute",
            begin: /\w+/,
            relevance: 0,
            keywords: {
              nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
            },
            starts: {
              end: /$/,
              relevance: 0,
              keywords: { literal: "on off all deny allow" },
              contains: [
                {
                  className: "meta",
                  begin: /\s\[/,
                  end: /\]$/
                },
                {
                  className: "variable",
                  begin: /[\$%]\{/,
                  end: /\}/,
                  contains: [
                    "self",
                    NUMBER_REF
                  ]
                },
                IP_ADDRESS,
                NUMBER,
                hljs.QUOTE_STRING_MODE
              ]
            }
          }
        ],
        illegal: /\S/
      };
    }
    module.exports = apache;
  }
});
export default require_apache();
//# sourceMappingURL=/build/_shared/apache-SKCNYDHF.js.map
