import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/highlight.js/lib/languages/autohotkey.js
var require_autohotkey = __commonJS({
  "node_modules/highlight.js/lib/languages/autohotkey.js"(exports, module) {
    function autohotkey(hljs) {
      const BACKTICK_ESCAPE = {
        begin: "`[\\s\\S]"
      };
      return {
        name: "AutoHotkey",
        case_insensitive: true,
        aliases: ["ahk"],
        keywords: {
          keyword: "Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group",
          literal: "true false NOT AND OR",
          built_in: "ComSpec Clipboard ClipboardAll ErrorLevel"
        },
        contains: [
          BACKTICK_ESCAPE,
          hljs.inherit(hljs.QUOTE_STRING_MODE, {
            contains: [BACKTICK_ESCAPE]
          }),
          hljs.COMMENT(";", "$", {
            relevance: 0
          }),
          hljs.C_BLOCK_COMMENT_MODE,
          {
            className: "number",
            begin: hljs.NUMBER_RE,
            relevance: 0
          },
          {
            className: "variable",
            begin: "%[a-zA-Z0-9#_$@]+%"
          },
          {
            className: "built_in",
            begin: "^\\s*\\w+\\s*(,|%)"
          },
          {
            className: "title",
            variants: [
              {
                begin: '^[^\\n";]+::(?!=)'
              },
              {
                begin: '^[^\\n";]+:(?!=)',
                relevance: 0
              }
            ]
          },
          {
            className: "meta",
            begin: "^\\s*#\\w+",
            end: "$",
            relevance: 0
          },
          {
            className: "built_in",
            begin: "A_[a-zA-Z0-9]+"
          },
          {
            begin: ",\\s*,"
          }
        ]
      };
    }
    module.exports = autohotkey;
  }
});
export default require_autohotkey();
//# sourceMappingURL=/build/_shared/autohotkey-Z22577BC.js.map
