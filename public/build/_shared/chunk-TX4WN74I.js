import {
  __commonJS
} from "/build/_shared/chunk-42Z7WWMI.js";

// node_modules/refractor/lang/livescript.js
var require_livescript = __commonJS({
  "node_modules/refractor/lang/livescript.js"(exports, module) {
    module.exports = livescript;
    livescript.displayName = "livescript";
    livescript.aliases = [];
    function livescript(Prism) {
      Prism.languages.livescript = {
        comment: [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
            lookbehind: true
          },
          {
            pattern: /(^|[^\\])#.*/,
            lookbehind: true
          }
        ],
        "interpolated-string": {
          pattern: /(^|[^"])("""|")(?:\\[\s\S]|(?!\2)[^\\])*\2(?!")/,
          lookbehind: true,
          greedy: true,
          inside: {
            variable: {
              pattern: /(^|[^\\])#[a-z_](?:-?[a-z]|[\d_])*/m,
              lookbehind: true
            },
            interpolation: {
              pattern: /(^|[^\\])#\{[^}]+\}/m,
              lookbehind: true,
              inside: {
                "interpolation-punctuation": {
                  pattern: /^#\{|\}$/,
                  alias: "variable"
                }
              }
            },
            string: /[\s\S]+/
          }
        },
        string: [
          {
            pattern: /('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,
            greedy: true
          },
          {
            pattern: /<\[[\s\S]*?\]>/,
            greedy: true
          },
          /\\[^\s,;\])}]+/
        ],
        regex: [
          {
            pattern: /\/\/(?:\[[^\r\n\]]*\]|\\.|(?!\/\/)[^\\\[])+\/\/[gimyu]{0,5}/,
            greedy: true,
            inside: {
              comment: {
                pattern: /(^|[^\\])#.*/,
                lookbehind: true
              }
            }
          },
          {
            pattern: /\/(?:\[[^\r\n\]]*\]|\\.|[^/\\\r\n\[])+\/[gimyu]{0,5}/,
            greedy: true
          }
        ],
        keyword: {
          pattern: /(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,
          lookbehind: true
        },
        "keyword-operator": {
          pattern: /(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?: not|nt)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,
          lookbehind: true,
          alias: "operator"
        },
        boolean: {
          pattern: /(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m,
          lookbehind: true
        },
        argument: {
          pattern: /(^|(?!\.&\.)[^&])&(?!&)\d*/m,
          lookbehind: true,
          alias: "variable"
        },
        number: /\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,
        identifier: /[a-z_](?:-?[a-z]|[\d_])*/i,
        operator: [
          {
            pattern: /( )\.(?= )/,
            lookbehind: true
          },
          /\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/
        ],
        punctuation: /[(){}\[\]|.,:;`]/
      };
      Prism.languages.livescript["interpolated-string"].inside["interpolation"].inside.rest = Prism.languages.livescript;
    }
  }
});

export {
  require_livescript
};
//# sourceMappingURL=/build/_shared/chunk-TX4WN74I.js.map
