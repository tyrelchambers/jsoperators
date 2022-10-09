import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/refractor/lang/perl.js
var require_perl = __commonJS({
  "node_modules/refractor/lang/perl.js"(exports, module) {
    module.exports = perl;
    perl.displayName = "perl";
    perl.aliases = [];
    function perl(Prism) {
      ;
      (function(Prism2) {
        var brackets = /(?:\((?:[^()\\]|\\[\s\S])*\)|\{(?:[^{}\\]|\\[\s\S])*\}|\[(?:[^[\]\\]|\\[\s\S])*\]|<(?:[^<>\\]|\\[\s\S])*>)/.source;
        Prism2.languages.perl = {
          comment: [
            {
              pattern: /(^\s*)=\w[\s\S]*?=cut.*/m,
              lookbehind: true,
              greedy: true
            },
            {
              pattern: /(^|[^\\$])#.*/,
              lookbehind: true,
              greedy: true
            }
          ],
          string: [
            {
              pattern: RegExp(
                /\b(?:q|qq|qw|qx)(?![a-zA-Z0-9])\s*/.source + "(?:" + [
                  /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
                  /([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
                  brackets
                ].join("|") + ")"
              ),
              greedy: true
            },
            {
              pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,
              greedy: true
            },
            {
              pattern: /'(?:[^'\\\r\n]|\\.)*'/,
              greedy: true
            }
          ],
          regex: [
            {
              pattern: RegExp(
                /\b(?:m|qr)(?![a-zA-Z0-9])\s*/.source + "(?:" + [
                  /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
                  /([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
                  brackets
                ].join("|") + ")" + /[msixpodualngc]*/.source
              ),
              greedy: true
            },
            {
              pattern: RegExp(
                /(^|[^-])\b(?:s|tr|y)(?![a-zA-Z0-9])\s*/.source + "(?:" + [
                  /([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
                  /([a-zA-Z0-9])(?:(?!\3)[^\\]|\\[\s\S])*\3(?:(?!\3)[^\\]|\\[\s\S])*\3/.source,
                  brackets + /\s*/.source + brackets
                ].join("|") + ")" + /[msixpodualngcer]*/.source
              ),
              lookbehind: true,
              greedy: true
            },
            {
              pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|x|xor)\b))/,
              greedy: true
            }
          ],
          variable: [
            /[&*$@%]\{\^[A-Z]+\}/,
            /[&*$@%]\^[A-Z_]/,
            /[&*$@%]#?(?=\{)/,
            /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/,
            /[&*$@%]\d+/,
            /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/
          ],
          filehandle: {
            pattern: /<(?![<=])\S*?>|\b_\b/,
            alias: "symbol"
          },
          "v-string": {
            pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
            alias: "string"
          },
          function: {
            pattern: /(\bsub[ \t]+)\w+/,
            lookbehind: true
          },
          keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
          number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
          operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)\b/,
          punctuation: /[{}[\];(),:]/
        };
      })(Prism);
    }
  }
});

export {
  require_perl
};
//# sourceMappingURL=/build/_shared/chunk-O5HV2SHS.js.map
