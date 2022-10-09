import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/refractor/lang/wiki.js
var require_wiki = __commonJS({
  "node_modules/refractor/lang/wiki.js"(exports, module) {
    module.exports = wiki;
    wiki.displayName = "wiki";
    wiki.aliases = [];
    function wiki(Prism) {
      Prism.languages.wiki = Prism.languages.extend("markup", {
        "block-comment": {
          pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
          lookbehind: true,
          alias: "comment"
        },
        heading: {
          pattern: /^(=+)[^=\r\n].*?\1/m,
          inside: {
            punctuation: /^=+|=+$/,
            important: /.+/
          }
        },
        emphasis: {
          pattern: /('{2,5}).+?\1/,
          inside: {
            "bold-italic": {
              pattern: /(''''').+?(?=\1)/,
              lookbehind: true,
              alias: ["bold", "italic"]
            },
            bold: {
              pattern: /(''')[^'](?:.*?[^'])?(?=\1)/,
              lookbehind: true
            },
            italic: {
              pattern: /('')[^'](?:.*?[^'])?(?=\1)/,
              lookbehind: true
            },
            punctuation: /^''+|''+$/
          }
        },
        hr: {
          pattern: /^-{4,}/m,
          alias: "punctuation"
        },
        url: [
          /ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:PMID|RFC) +\d+/i,
          /\[\[.+?\]\]|\[.+?\]/
        ],
        variable: [
          /__[A-Z]+__/,
          /\{{3}.+?\}{3}/,
          /\{\{.+?\}\}/
        ],
        symbol: [/^#redirect/im, /~{3,5}/],
        "table-tag": {
          pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
          lookbehind: true,
          inside: {
            "table-bar": {
              pattern: /\|$/,
              alias: "punctuation"
            },
            rest: Prism.languages.markup["tag"].inside
          }
        },
        punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
      });
      Prism.languages.insertBefore("wiki", "tag", {
        nowiki: {
          pattern: /<(nowiki|pre|source)\b[^>]*>[\s\S]*?<\/\1>/i,
          inside: {
            tag: {
              pattern: /<(?:nowiki|pre|source)\b[^>]*>|<\/(?:nowiki|pre|source)>/i,
              inside: Prism.languages.markup["tag"].inside
            }
          }
        }
      });
    }
  }
});

export {
  require_wiki
};
//# sourceMappingURL=/build/_shared/chunk-INMAF57T.js.map
