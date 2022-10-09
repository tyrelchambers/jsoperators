import {
  __commonJS
} from "/build/_shared/chunk-42Z7WWMI.js";

// node_modules/refractor/lang/d.js
var require_d = __commonJS({
  "node_modules/refractor/lang/d.js"(exports, module) {
    module.exports = d;
    d.displayName = "d";
    d.aliases = [];
    function d(Prism) {
      Prism.languages.d = Prism.languages.extend("clike", {
        comment: [
          {
            pattern: /^\s*#!.+/,
            greedy: true
          },
          {
            pattern: RegExp(
              /(^|[^\\])/.source + "(?:" + [
                /\/\+(?:\/\+(?:[^+]|\+(?!\/))*\+\/|(?!\/\+)[\s\S])*?\+\//.source,
                /\/\/.*/.source,
                /\/\*[\s\S]*?\*\//.source
              ].join("|") + ")"
            ),
            lookbehind: true,
            greedy: true
          }
        ],
        string: [
          {
            pattern: RegExp(
              [
                /\b[rx]"(?:\\[\s\S]|[^\\"])*"[cwd]?/.source,
                /\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/.source,
                /\bq"((?!\d)\w+)$[\s\S]*?^\1"/.source,
                /\bq"(.)[\s\S]*?\2"/.source,
                /(["`])(?:\\[\s\S]|(?!\3)[^\\])*\3[cwd]?/.source
              ].join("|"),
              "m"
            ),
            greedy: true
          },
          {
            pattern: /\bq\{(?:\{[^{}]*\}|[^{}])*\}/,
            greedy: true,
            alias: "token-string"
          }
        ],
        keyword: /\$|\b(?:__(?:(?:DATE|EOF|FILE|FUNCTION|LINE|MODULE|PRETTY_FUNCTION|TIMESTAMP|TIME|VENDOR|VERSION)__|gshared|parameters|traits|vector)|abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|dstring|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|ptrdiff_t|public|pure|real|ref|return|scope|shared|short|size_t|static|string|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|wstring)\b/,
        number: [
          /\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]{0,4}/i,
          {
            pattern: /((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]{0,4}/i,
            lookbehind: true
          }
        ],
        operator: /\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/
      });
      Prism.languages.insertBefore("d", "string", {
        char: /'(?:\\(?:\W|\w+)|[^\\])'/
      });
      Prism.languages.insertBefore("d", "keyword", {
        property: /\B@\w*/
      });
      Prism.languages.insertBefore("d", "function", {
        register: {
          pattern: /\b(?:[ABCD][LHX]|E?(?:BP|DI|SI|SP)|[BS]PL|[ECSDGF]S|CR[0234]|[DS]IL|DR[012367]|E[ABCD]X|X?MM[0-7]|R(?:1[0-5]|[89])[BWD]?|R[ABCD]X|R[BS]P|R[DS]I|TR[3-7]|XMM(?:1[0-5]|[89])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,
          alias: "variable"
        }
      });
    }
  }
});

export {
  require_d
};
//# sourceMappingURL=/build/_shared/chunk-TOY2ACQJ.js.map
