import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/highlight.js/lib/languages/ada.js
var require_ada = __commonJS({
  "node_modules/highlight.js/lib/languages/ada.js"(exports, module) {
    function ada(hljs) {
      const INTEGER_RE = "\\d(_|\\d)*";
      const EXPONENT_RE = "[eE][-+]?" + INTEGER_RE;
      const DECIMAL_LITERAL_RE = INTEGER_RE + "(\\." + INTEGER_RE + ")?(" + EXPONENT_RE + ")?";
      const BASED_INTEGER_RE = "\\w+";
      const BASED_LITERAL_RE = INTEGER_RE + "#" + BASED_INTEGER_RE + "(\\." + BASED_INTEGER_RE + ")?#(" + EXPONENT_RE + ")?";
      const NUMBER_RE = "\\b(" + BASED_LITERAL_RE + "|" + DECIMAL_LITERAL_RE + ")";
      const ID_REGEX = "[A-Za-z](_?[A-Za-z0-9.])*";
      const BAD_CHARS = `[]\\{\\}%#'"`;
      const COMMENTS = hljs.COMMENT("--", "$");
      const VAR_DECLS = {
        begin: "\\s+:\\s+",
        end: "\\s*(:=|;|\\)|=>|$)",
        illegal: BAD_CHARS,
        contains: [
          {
            beginKeywords: "loop for declare others",
            endsParent: true
          },
          {
            className: "keyword",
            beginKeywords: "not null constant access function procedure in out aliased exception"
          },
          {
            className: "type",
            begin: ID_REGEX,
            endsParent: true,
            relevance: 0
          }
        ]
      };
      return {
        name: "Ada",
        case_insensitive: true,
        keywords: {
          keyword: "abort else new return abs elsif not reverse abstract end accept entry select access exception of separate aliased exit or some all others subtype and for out synchronized array function overriding at tagged generic package task begin goto pragma terminate body private then if procedure type case in protected constant interface is raise use declare range delay limited record when delta loop rem while digits renames with do mod requeue xor",
          literal: "True False"
        },
        contains: [
          COMMENTS,
          {
            className: "string",
            begin: /"/,
            end: /"/,
            contains: [{
              begin: /""/,
              relevance: 0
            }]
          },
          {
            className: "string",
            begin: /'.'/
          },
          {
            className: "number",
            begin: NUMBER_RE,
            relevance: 0
          },
          {
            className: "symbol",
            begin: "'" + ID_REGEX
          },
          {
            className: "title",
            begin: "(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?",
            end: "(is|$)",
            keywords: "package body",
            excludeBegin: true,
            excludeEnd: true,
            illegal: BAD_CHARS
          },
          {
            begin: "(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+",
            end: "(\\bis|\\bwith|\\brenames|\\)\\s*;)",
            keywords: "overriding function procedure with is renames return",
            returnBegin: true,
            contains: [
              COMMENTS,
              {
                className: "title",
                begin: "(\\bwith\\s+)?\\b(function|procedure)\\s+",
                end: "(\\(|\\s+|$)",
                excludeBegin: true,
                excludeEnd: true,
                illegal: BAD_CHARS
              },
              VAR_DECLS,
              {
                className: "type",
                begin: "\\breturn\\s+",
                end: "(\\s+|;|$)",
                keywords: "return",
                excludeBegin: true,
                excludeEnd: true,
                endsParent: true,
                illegal: BAD_CHARS
              }
            ]
          },
          {
            className: "type",
            begin: "\\b(sub)?type\\s+",
            end: "\\s+",
            keywords: "type",
            excludeBegin: true,
            illegal: BAD_CHARS
          },
          VAR_DECLS
        ]
      };
    }
    module.exports = ada;
  }
});
export default require_ada();
//# sourceMappingURL=/build/_shared/ada-HZJNVCE6.js.map
