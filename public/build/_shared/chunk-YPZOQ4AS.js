import {
  require_bash
} from "/build/_shared/chunk-QLB2UJA7.js";
import {
  __commonJS
} from "/build/_shared/chunk-42Z7WWMI.js";

// node_modules/refractor/lang/shell-session.js
var require_shell_session = __commonJS({
  "node_modules/refractor/lang/shell-session.js"(exports, module) {
    var refractorBash = require_bash();
    module.exports = shellSession;
    shellSession.displayName = "shellSession";
    shellSession.aliases = [];
    function shellSession(Prism) {
      Prism.register(refractorBash);
      (function(Prism2) {
        var strings = [
          /"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/.source,
          /'[^']*'/.source,
          /\$'(?:[^'\\]|\\[\s\S])*'/.source,
          /<<-?\s*(["']?)(\w+)\1\s[\s\S]*?[\r\n]\2/.source
        ].join("|");
        Prism2.languages["shell-session"] = {
          command: {
            pattern: RegExp(
              /^/.source + "(?:" + (/[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+(?::[^\0-\x1F$#%*?"<>:;|]+)?/.source + "|" + /[/~.][^\0-\x1F$#%*?"<>@:;|]*/.source) + ")?" + /[$#%](?=\s)/.source + /(?:[^\\\r\n \t'"<$]|[ \t](?:(?!#)|#.*$)|\\(?:[^\r]|\r\n?)|\$(?!')|<(?!<)|<<str>>)+/.source.replace(
                /<<str>>/g,
                function() {
                  return strings;
                }
              ),
              "m"
            ),
            greedy: true,
            inside: {
              info: {
                pattern: /^[^#$%]+/,
                alias: "punctuation",
                inside: {
                  user: /^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,
                  punctuation: /:/,
                  path: /[\s\S]+/
                }
              },
              bash: {
                pattern: /(^[$#%]\s*)\S[\s\S]*/,
                lookbehind: true,
                alias: "language-bash",
                inside: Prism2.languages.bash
              },
              "shell-symbol": {
                pattern: /^[$#%]/,
                alias: "important"
              }
            }
          },
          output: /.(?:.*(?:[\r\n]|.$))*/
        };
        Prism2.languages["sh-session"] = Prism2.languages["shellsession"] = Prism2.languages["shell-session"];
      })(Prism);
    }
  }
});

export {
  require_shell_session
};
//# sourceMappingURL=/build/_shared/chunk-YPZOQ4AS.js.map
