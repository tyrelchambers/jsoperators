import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/refractor/lang/markup-templating.js
var require_markup_templating = __commonJS({
  "node_modules/refractor/lang/markup-templating.js"(exports, module) {
    module.exports = markupTemplating;
    markupTemplating.displayName = "markupTemplating";
    markupTemplating.aliases = [];
    function markupTemplating(Prism) {
      ;
      (function(Prism2) {
        function getPlaceholder(language, index) {
          return "___" + language.toUpperCase() + index + "___";
        }
        Object.defineProperties(Prism2.languages["markup-templating"] = {}, {
          buildPlaceholders: {
            value: function(env, language, placeholderPattern, replaceFilter) {
              if (env.language !== language) {
                return;
              }
              var tokenStack = env.tokenStack = [];
              env.code = env.code.replace(placeholderPattern, function(match) {
                if (typeof replaceFilter === "function" && !replaceFilter(match)) {
                  return match;
                }
                var i = tokenStack.length;
                var placeholder;
                while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
                  ++i;
                }
                tokenStack[i] = match;
                return placeholder;
              });
              env.grammar = Prism2.languages.markup;
            }
          },
          tokenizePlaceholders: {
            value: function(env, language) {
              if (env.language !== language || !env.tokenStack) {
                return;
              }
              env.grammar = Prism2.languages[language];
              var j = 0;
              var keys = Object.keys(env.tokenStack);
              function walkTokens(tokens) {
                for (var i = 0; i < tokens.length; i++) {
                  if (j >= keys.length) {
                    break;
                  }
                  var token = tokens[i];
                  if (typeof token === "string" || token.content && typeof token.content === "string") {
                    var k = keys[j];
                    var t = env.tokenStack[k];
                    var s = typeof token === "string" ? token : token.content;
                    var placeholder = getPlaceholder(language, k);
                    var index = s.indexOf(placeholder);
                    if (index > -1) {
                      ++j;
                      var before = s.substring(0, index);
                      var middle = new Prism2.Token(
                        language,
                        Prism2.tokenize(t, env.grammar),
                        "language-" + language,
                        t
                      );
                      var after = s.substring(index + placeholder.length);
                      var replacement = [];
                      if (before) {
                        replacement.push.apply(replacement, walkTokens([before]));
                      }
                      replacement.push(middle);
                      if (after) {
                        replacement.push.apply(replacement, walkTokens([after]));
                      }
                      if (typeof token === "string") {
                        tokens.splice.apply(tokens, [i, 1].concat(replacement));
                      } else {
                        token.content = replacement;
                      }
                    }
                  } else if (token.content) {
                    walkTokens(token.content);
                  }
                }
                return tokens;
              }
              walkTokens(env.tokens);
            }
          }
        });
      })(Prism);
    }
  }
});

export {
  require_markup_templating
};
//# sourceMappingURL=/build/_shared/chunk-5LBL3EFW.js.map
