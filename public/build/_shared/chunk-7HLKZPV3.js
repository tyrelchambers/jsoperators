import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/refractor/lang/eiffel.js
var require_eiffel = __commonJS({
  "node_modules/refractor/lang/eiffel.js"(exports, module) {
    module.exports = eiffel;
    eiffel.displayName = "eiffel";
    eiffel.aliases = [];
    function eiffel(Prism) {
      Prism.languages.eiffel = {
        comment: /--.*/,
        string: [
          {
            pattern: /"([^[]*)\[[\s\S]*?\]\1"/,
            greedy: true
          },
          {
            pattern: /"([^{]*)\{[\s\S]*?\}\1"/,
            greedy: true
          },
          {
            pattern: /"(?:%(?:(?!\n)\s)*\n\s*%|%\S|[^%"\r\n])*"/,
            greedy: true
          }
        ],
        char: /'(?:%.|[^%'\r\n])+'/,
        keyword: /\b(?:across|agent|alias|all|and|as|assign|attached|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,
        boolean: /\b(?:False|True)\b/i,
        "class-name": /\b[A-Z][\dA-Z_]*\b/,
        number: [
          /\b0[xcb][\da-f](?:_*[\da-f])*\b/i,
          /(?:\b\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*\b|\b\d(?:_*\d)*\b\.?/i
        ],
        punctuation: /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,
        operator: /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/
      };
    }
  }
});

export {
  require_eiffel
};
//# sourceMappingURL=/build/_shared/chunk-7HLKZPV3.js.map
