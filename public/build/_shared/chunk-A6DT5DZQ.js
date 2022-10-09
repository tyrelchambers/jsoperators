import {
  __commonJS
} from "/build/_shared/chunk-42Z7WWMI.js";

// node_modules/refractor/lang/groovy.js
var require_groovy = __commonJS({
  "node_modules/refractor/lang/groovy.js"(exports, module) {
    module.exports = groovy;
    groovy.displayName = "groovy";
    groovy.aliases = [];
    function groovy(Prism) {
      Prism.languages.groovy = Prism.languages.extend("clike", {
        string: [
          {
            pattern: /("""|''')(?:[^\\]|\\[\s\S])*?\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,
            greedy: true
          },
          {
            pattern: /(["'/])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            greedy: true
          }
        ],
        keyword: /\b(?:abstract|as|assert|boolean|break|byte|case|catch|char|class|const|continue|def|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
        number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,
        operator: {
          pattern: /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
          lookbehind: true
        },
        punctuation: /\.+|[{}[\];(),:$]/
      });
      Prism.languages.insertBefore("groovy", "string", {
        shebang: {
          pattern: /#!.+/,
          alias: "comment"
        }
      });
      Prism.languages.insertBefore("groovy", "punctuation", {
        "spock-block": /\b(?:and|cleanup|expect|given|setup|then|when|where):/
      });
      Prism.languages.insertBefore("groovy", "function", {
        annotation: {
          pattern: /(^|[^.])@\w+/,
          lookbehind: true,
          alias: "punctuation"
        }
      });
      Prism.hooks.add("wrap", function(env) {
        if (env.language === "groovy" && env.type === "string") {
          var delimiter = env.content.value[0];
          if (delimiter != "'") {
            var pattern = /([^\\])(?:\$(?:\{.*?\}|[\w.]+))/;
            if (delimiter === "$") {
              pattern = /([^\$])(?:\$(?:\{.*?\}|[\w.]+))/;
            }
            env.content.value = env.content.value.replace(/&lt;/g, "<").replace(/&amp;/g, "&");
            env.content = Prism.highlight(env.content.value, {
              expression: {
                pattern,
                lookbehind: true,
                inside: Prism.languages.groovy
              }
            });
            env.classes.push(delimiter === "/" ? "regex" : "gstring");
          }
        }
      });
    }
  }
});

export {
  require_groovy
};
//# sourceMappingURL=/build/_shared/chunk-A6DT5DZQ.js.map
