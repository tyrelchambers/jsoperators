import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/refractor/lang/elixir.js
var require_elixir = __commonJS({
  "node_modules/refractor/lang/elixir.js"(exports, module) {
    module.exports = elixir;
    elixir.displayName = "elixir";
    elixir.aliases = [];
    function elixir(Prism) {
      Prism.languages.elixir = {
        doc: {
          pattern: /@(?:doc|moduledoc)\s+(?:("""|''')[\s\S]*?\1|("|')(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2)/,
          inside: {
            attribute: /^@\w+/,
            string: /['"][\s\S]+/
          }
        },
        comment: {
          pattern: /#.*/,
          greedy: true
        },
        regex: {
          pattern: /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
          greedy: true
        },
        string: [
          {
            pattern: /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|#(?!\{)|[^#\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
            greedy: true,
            inside: {}
          },
          {
            pattern: /("""|''')[\s\S]*?\1/,
            greedy: true,
            inside: {}
          },
          {
            pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: true,
            inside: {}
          }
        ],
        atom: {
          pattern: /(^|[^:]):\w+/,
          lookbehind: true,
          alias: "symbol"
        },
        module: {
          pattern: /\b[A-Z]\w*\b/,
          alias: "class-name"
        },
        "attr-name": /\b\w+\??:(?!:)/,
        argument: {
          pattern: /(^|[^&])&\d+/,
          lookbehind: true,
          alias: "variable"
        },
        attribute: {
          pattern: /@\w+/,
          alias: "variable"
        },
        function: /\b[_a-zA-Z]\w*[?!]?(?:(?=\s*(?:\.\s*)?\()|(?=\/\d))/,
        number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
        keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|delegate|exception|impl|macro|module|n|np|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|quote|raise|require|rescue|try|unless|unquote|use|when)\b/,
        boolean: /\b(?:false|nil|true)\b/,
        operator: [
          /\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,
          {
            pattern: /([^<])<(?!<)/,
            lookbehind: true
          },
          {
            pattern: /([^>])>(?!>)/,
            lookbehind: true
          }
        ],
        punctuation: /<<|>>|[.,%\[\]{}()]/
      };
      Prism.languages.elixir.string.forEach(function(o) {
        o.inside = {
          interpolation: {
            pattern: /#\{[^}]+\}/,
            inside: {
              delimiter: {
                pattern: /^#\{|\}$/,
                alias: "punctuation"
              },
              rest: Prism.languages.elixir
            }
          }
        };
      });
    }
  }
});

export {
  require_elixir
};
//# sourceMappingURL=/build/_shared/chunk-OH44JRNC.js.map
