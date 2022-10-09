import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/refractor/lang/birb.js
var require_birb = __commonJS({
  "node_modules/refractor/lang/birb.js"(exports, module) {
    module.exports = birb;
    birb.displayName = "birb";
    birb.aliases = [];
    function birb(Prism) {
      Prism.languages.birb = Prism.languages.extend("clike", {
        string: {
          pattern: /r?("|')(?:\\.|(?!\1)[^\\])*\1/,
          greedy: true
        },
        "class-name": [
          /\b[A-Z](?:[\d_]*[a-zA-Z]\w*)?\b/,
          /\b(?:[A-Z]\w*|(?!(?:var|void)\b)[a-z]\w*)(?=\s+\w+\s*[;,=()])/
        ],
        keyword: /\b(?:assert|break|case|class|const|default|else|enum|final|follows|for|grab|if|nest|new|next|noSeeb|return|static|switch|throw|var|void|while)\b/,
        operator: /\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?|:/,
        variable: /\b[a-z_]\w*\b/
      });
      Prism.languages.insertBefore("birb", "function", {
        metadata: {
          pattern: /<\w+>/,
          greedy: true,
          alias: "symbol"
        }
      });
    }
  }
});

export {
  require_birb
};
//# sourceMappingURL=/build/_shared/chunk-D636QZ6D.js.map
