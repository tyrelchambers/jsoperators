import {
  __commonJS
} from "/build/_shared/chunk-42Z7WWMI.js";

// node_modules/refractor/lang/scheme.js
var require_scheme = __commonJS({
  "node_modules/refractor/lang/scheme.js"(exports, module) {
    module.exports = scheme;
    scheme.displayName = "scheme";
    scheme.aliases = [];
    function scheme(Prism) {
      ;
      (function(Prism2) {
        Prism2.languages.scheme = {
          comment: /;.*|#;\s*(?:\((?:[^()]|\([^()]*\))*\)|\[(?:[^\[\]]|\[[^\[\]]*\])*\])|#\|(?:[^#|]|#(?!\|)|\|(?!#)|#\|(?:[^#|]|#(?!\|)|\|(?!#))*\|#)*\|#/,
          string: {
            pattern: /"(?:[^"\\]|\\.)*"/,
            greedy: true
          },
          symbol: {
            pattern: /'[^()\[\]#'\s]+/,
            greedy: true
          },
          char: {
            pattern: /#\\(?:[ux][a-fA-F\d]+\b|[-a-zA-Z]+\b|[\uD800-\uDBFF][\uDC00-\uDFFF]|\S)/,
            greedy: true
          },
          "lambda-parameter": [
            {
              pattern: /((?:^|[^'`#])[(\[]lambda\s+)(?:[^|()\[\]'\s]+|\|(?:[^\\|]|\\.)*\|)/,
              lookbehind: true
            },
            {
              pattern: /((?:^|[^'`#])[(\[]lambda\s+[(\[])[^()\[\]']+/,
              lookbehind: true
            }
          ],
          keyword: {
            pattern: /((?:^|[^'`#])[(\[])(?:begin|case(?:-lambda)?|cond(?:-expand)?|define(?:-library|-macro|-record-type|-syntax|-values)?|defmacro|delay(?:-force)?|do|else|except|export|guard|if|import|include(?:-ci|-library-declarations)?|lambda|let(?:rec)?(?:-syntax|-values|\*)?|let\*-values|only|parameterize|prefix|(?:quasi-?)?quote|rename|set!|syntax-(?:case|rules)|unless|unquote(?:-splicing)?|when)(?=[()\[\]\s]|$)/,
            lookbehind: true
          },
          builtin: {
            pattern: /((?:^|[^'`#])[(\[])(?:abs|and|append|apply|assoc|ass[qv]|binary-port\?|boolean=?\?|bytevector(?:-append|-copy|-copy!|-length|-u8-ref|-u8-set!|\?)?|caar|cadr|call-with-(?:current-continuation|port|values)|call\/cc|car|cdar|cddr|cdr|ceiling|char(?:->integer|-ready\?|\?|<\?|<=\?|=\?|>\?|>=\?)|close-(?:input-port|output-port|port)|complex\?|cons|current-(?:error|input|output)-port|denominator|dynamic-wind|eof-object\??|eq\?|equal\?|eqv\?|error|error-object(?:-irritants|-message|\?)|eval|even\?|exact(?:-integer-sqrt|-integer\?|\?)?|expt|features|file-error\?|floor(?:-quotient|-remainder|\/)?|flush-output-port|for-each|gcd|get-output-(?:bytevector|string)|inexact\??|input-port(?:-open\?|\?)|integer(?:->char|\?)|lcm|length|list(?:->string|->vector|-copy|-ref|-set!|-tail|\?)?|make-(?:bytevector|list|parameter|string|vector)|map|max|member|memq|memv|min|modulo|negative\?|newline|not|null\?|number(?:->string|\?)|numerator|odd\?|open-(?:input|output)-(?:bytevector|string)|or|output-port(?:-open\?|\?)|pair\?|peek-char|peek-u8|port\?|positive\?|procedure\?|quotient|raise|raise-continuable|rational\?|rationalize|read-(?:bytevector|bytevector!|char|error\?|line|string|u8)|real\?|remainder|reverse|round|set-c[ad]r!|square|string(?:->list|->number|->symbol|->utf8|->vector|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?|<\?|<=\?|=\?|>\?|>=\?)?|substring|symbol(?:->string|\?|=\?)|syntax-error|textual-port\?|truncate(?:-quotient|-remainder|\/)?|u8-ready\?|utf8->string|values|vector(?:->list|->string|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?)?|with-exception-handler|write-(?:bytevector|char|string|u8)|zero\?)(?=[()\[\]\s]|$)/,
            lookbehind: true
          },
          operator: {
            pattern: /((?:^|[^'`#])[(\[])(?:[-+*%/]|[<>]=?|=>?)(?=[()\[\]\s]|$)/,
            lookbehind: true
          },
          number: {
            pattern: RegExp(
              SortedBNF({
                "<ureal dec>": /\d+(?:\/\d+)|(?:\d+(?:\.\d*)?|\.\d+)(?:[esfdl][+-]?\d+)?/.source,
                "<real dec>": /[+-]?<ureal dec>|[+-](?:inf|nan)\.0/.source,
                "<imaginary dec>": /[+-](?:<ureal dec>|(?:inf|nan)\.0)?i/.source,
                "<complex dec>": /<real dec>(?:@<real dec>|<imaginary dec>)?|<imaginary dec>/.source,
                "<num dec>": /(?:#d(?:#[ei])?|#[ei](?:#d)?)?<complex dec>/.source,
                "<ureal box>": /[0-9a-f]+(?:\/[0-9a-f]+)?/.source,
                "<real box>": /[+-]?<ureal box>|[+-](?:inf|nan)\.0/.source,
                "<imaginary box>": /[+-](?:<ureal box>|(?:inf|nan)\.0)?i/.source,
                "<complex box>": /<real box>(?:@<real box>|<imaginary box>)?|<imaginary box>/.source,
                "<num box>": /#[box](?:#[ei])?|(?:#[ei])?#[box]<complex box>/.source,
                "<number>": /(^|[()\[\]\s])(?:<num dec>|<num box>)(?=[()\[\]\s]|$)/.source
              }),
              "i"
            ),
            lookbehind: true
          },
          boolean: {
            pattern: /(^|[()\[\]\s])#(?:[ft]|false|true)(?=[()\[\]\s]|$)/,
            lookbehind: true
          },
          function: {
            pattern: /((?:^|[^'`#])[(\[])(?:[^|()\[\]'\s]+|\|(?:[^\\|]|\\.)*\|)(?=[()\[\]\s]|$)/,
            lookbehind: true
          },
          identifier: {
            pattern: /(^|[()\[\]\s])\|(?:[^\\|]|\\.)*\|(?=[()\[\]\s]|$)/,
            lookbehind: true,
            greedy: true
          },
          punctuation: /[()\[\]']/
        };
        function SortedBNF(grammar) {
          for (var key in grammar) {
            grammar[key] = grammar[key].replace(/<[\w\s]+>/g, function(key2) {
              return "(?:" + grammar[key2].trim() + ")";
            });
          }
          return grammar[key];
        }
      })(Prism);
    }
  }
});

export {
  require_scheme
};
//# sourceMappingURL=/build/_shared/chunk-655TYCES.js.map
