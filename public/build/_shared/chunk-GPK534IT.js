import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/refractor/lang/coffeescript.js
var require_coffeescript = __commonJS({
  "node_modules/refractor/lang/coffeescript.js"(exports, module) {
    module.exports = coffeescript;
    coffeescript.displayName = "coffeescript";
    coffeescript.aliases = ["coffee"];
    function coffeescript(Prism) {
      ;
      (function(Prism2) {
        var comment = /#(?!\{).+/;
        var interpolation = {
          pattern: /#\{[^}]+\}/,
          alias: "variable"
        };
        Prism2.languages.coffeescript = Prism2.languages.extend("javascript", {
          comment,
          string: [
            {
              pattern: /'(?:\\[\s\S]|[^\\'])*'/,
              greedy: true
            },
            {
              pattern: /"(?:\\[\s\S]|[^\\"])*"/,
              greedy: true,
              inside: {
                interpolation
              }
            }
          ],
          keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
          "class-member": {
            pattern: /@(?!\d)\w+/,
            alias: "variable"
          }
        });
        Prism2.languages.insertBefore("coffeescript", "comment", {
          "multiline-comment": {
            pattern: /###[\s\S]+?###/,
            alias: "comment"
          },
          "block-regex": {
            pattern: /\/{3}[\s\S]*?\/{3}/,
            alias: "regex",
            inside: {
              comment,
              interpolation
            }
          }
        });
        Prism2.languages.insertBefore("coffeescript", "string", {
          "inline-javascript": {
            pattern: /`(?:\\[\s\S]|[^\\`])*`/,
            inside: {
              delimiter: {
                pattern: /^`|`$/,
                alias: "punctuation"
              },
              script: {
                pattern: /[\s\S]+/,
                alias: "language-javascript",
                inside: Prism2.languages.javascript
              }
            }
          },
          "multiline-string": [
            {
              pattern: /'''[\s\S]*?'''/,
              greedy: true,
              alias: "string"
            },
            {
              pattern: /"""[\s\S]*?"""/,
              greedy: true,
              alias: "string",
              inside: {
                interpolation
              }
            }
          ]
        });
        Prism2.languages.insertBefore("coffeescript", "keyword", {
          property: /(?!\d)\w+(?=\s*:(?!:))/
        });
        delete Prism2.languages.coffeescript["template-string"];
        Prism2.languages.coffee = Prism2.languages.coffeescript;
      })(Prism);
    }
  }
});

export {
  require_coffeescript
};
//# sourceMappingURL=/build/_shared/chunk-GPK534IT.js.map
