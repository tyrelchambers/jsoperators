import {
  __commonJS
} from "/build/_shared/chunk-42Z7WWMI.js";

// node_modules/refractor/lang/csharp.js
var require_csharp = __commonJS({
  "node_modules/refractor/lang/csharp.js"(exports, module) {
    module.exports = csharp;
    csharp.displayName = "csharp";
    csharp.aliases = ["dotnet", "cs"];
    function csharp(Prism) {
      ;
      (function(Prism2) {
        function replace(pattern, replacements) {
          return pattern.replace(/<<(\d+)>>/g, function(m, index) {
            return "(?:" + replacements[+index] + ")";
          });
        }
        function re(pattern, replacements, flags) {
          return RegExp(replace(pattern, replacements), flags || "");
        }
        function nested(pattern, depthLog2) {
          for (var i = 0; i < depthLog2; i++) {
            pattern = pattern.replace(/<<self>>/g, function() {
              return "(?:" + pattern + ")";
            });
          }
          return pattern.replace(/<<self>>/g, "[^\\s\\S]");
        }
        var keywordKinds = {
          type: "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
          typeDeclaration: "class enum interface record struct",
          contextual: "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
          other: "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"
        };
        function keywordsToPattern(words) {
          return "\\b(?:" + words.trim().replace(/ /g, "|") + ")\\b";
        }
        var typeDeclarationKeywords = keywordsToPattern(
          keywordKinds.typeDeclaration
        );
        var keywords = RegExp(
          keywordsToPattern(
            keywordKinds.type + " " + keywordKinds.typeDeclaration + " " + keywordKinds.contextual + " " + keywordKinds.other
          )
        );
        var nonTypeKeywords = keywordsToPattern(
          keywordKinds.typeDeclaration + " " + keywordKinds.contextual + " " + keywordKinds.other
        );
        var nonContextualKeywords = keywordsToPattern(
          keywordKinds.type + " " + keywordKinds.typeDeclaration + " " + keywordKinds.other
        );
        var generic = nested(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2);
        var nestedRound = nested(/\((?:[^()]|<<self>>)*\)/.source, 2);
        var name = /@?\b[A-Za-z_]\w*\b/.source;
        var genericName = replace(/<<0>>(?:\s*<<1>>)?/.source, [name, generic]);
        var identifier = replace(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [
          nonTypeKeywords,
          genericName
        ]);
        var array = /\[\s*(?:,\s*)*\]/.source;
        var typeExpressionWithoutTuple = replace(
          /<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,
          [identifier, array]
        );
        var tupleElement = replace(
          /[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,
          [generic, nestedRound, array]
        );
        var tuple = replace(/\(<<0>>+(?:,<<0>>+)+\)/.source, [tupleElement]);
        var typeExpression = replace(
          /(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,
          [tuple, identifier, array]
        );
        var typeInside = {
          keyword: keywords,
          punctuation: /[<>()?,.:[\]]/
        };
        var character = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source;
        var regularString = /"(?:\\.|[^\\"\r\n])*"/.source;
        var verbatimString = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;
        Prism2.languages.csharp = Prism2.languages.extend("clike", {
          string: [
            {
              pattern: re(/(^|[^$\\])<<0>>/.source, [verbatimString]),
              lookbehind: true,
              greedy: true
            },
            {
              pattern: re(/(^|[^@$\\])<<0>>/.source, [regularString]),
              lookbehind: true,
              greedy: true
            }
          ],
          "class-name": [
            {
              pattern: re(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [
                identifier
              ]),
              lookbehind: true,
              inside: typeInside
            },
            {
              pattern: re(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [
                name,
                typeExpression
              ]),
              lookbehind: true,
              inside: typeInside
            },
            {
              pattern: re(/(\busing\s+)<<0>>(?=\s*=)/.source, [name]),
              lookbehind: true
            },
            {
              pattern: re(/(\b<<0>>\s+)<<1>>/.source, [
                typeDeclarationKeywords,
                genericName
              ]),
              lookbehind: true,
              inside: typeInside
            },
            {
              pattern: re(/(\bcatch\s*\(\s*)<<0>>/.source, [identifier]),
              lookbehind: true,
              inside: typeInside
            },
            {
              pattern: re(/(\bwhere\s+)<<0>>/.source, [name]),
              lookbehind: true
            },
            {
              pattern: re(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [
                typeExpressionWithoutTuple
              ]),
              lookbehind: true,
              inside: typeInside
            },
            {
              pattern: re(
                /\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,
                [typeExpression, nonContextualKeywords, name]
              ),
              inside: typeInside
            }
          ],
          keyword: keywords,
          number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
          operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
          punctuation: /\?\.?|::|[{}[\];(),.:]/
        });
        Prism2.languages.insertBefore("csharp", "number", {
          range: {
            pattern: /\.\./,
            alias: "operator"
          }
        });
        Prism2.languages.insertBefore("csharp", "punctuation", {
          "named-parameter": {
            pattern: re(/([(,]\s*)<<0>>(?=\s*:)/.source, [name]),
            lookbehind: true,
            alias: "punctuation"
          }
        });
        Prism2.languages.insertBefore("csharp", "class-name", {
          namespace: {
            pattern: re(
              /(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,
              [name]
            ),
            lookbehind: true,
            inside: {
              punctuation: /\./
            }
          },
          "type-expression": {
            pattern: re(
              /(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,
              [nestedRound]
            ),
            lookbehind: true,
            alias: "class-name",
            inside: typeInside
          },
          "return-type": {
            pattern: re(
              /<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,
              [typeExpression, identifier]
            ),
            inside: typeInside,
            alias: "class-name"
          },
          "constructor-invocation": {
            pattern: re(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [typeExpression]),
            lookbehind: true,
            inside: typeInside,
            alias: "class-name"
          },
          "generic-method": {
            pattern: re(/<<0>>\s*<<1>>(?=\s*\()/.source, [name, generic]),
            inside: {
              function: re(/^<<0>>/.source, [name]),
              generic: {
                pattern: RegExp(generic),
                alias: "class-name",
                inside: typeInside
              }
            }
          },
          "type-list": {
            pattern: re(
              /\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,
              [
                typeDeclarationKeywords,
                genericName,
                name,
                typeExpression,
                keywords.source,
                nestedRound,
                /\bnew\s*\(\s*\)/.source
              ]
            ),
            lookbehind: true,
            inside: {
              "record-arguments": {
                pattern: re(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [
                  genericName,
                  nestedRound
                ]),
                lookbehind: true,
                greedy: true,
                inside: Prism2.languages.csharp
              },
              keyword: keywords,
              "class-name": {
                pattern: RegExp(typeExpression),
                greedy: true,
                inside: typeInside
              },
              punctuation: /[,()]/
            }
          },
          preprocessor: {
            pattern: /(^[\t ]*)#.*/m,
            lookbehind: true,
            alias: "property",
            inside: {
              directive: {
                pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
                lookbehind: true,
                alias: "keyword"
              }
            }
          }
        });
        var regularStringOrCharacter = regularString + "|" + character;
        var regularStringCharacterOrComment = replace(
          /\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,
          [regularStringOrCharacter]
        );
        var roundExpression = nested(
          replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [
            regularStringCharacterOrComment
          ]),
          2
        );
        var attrTarget = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source;
        var attr = replace(/<<0>>(?:\s*\(<<1>>*\))?/.source, [
          identifier,
          roundExpression
        ]);
        Prism2.languages.insertBefore("csharp", "class-name", {
          attribute: {
            pattern: re(
              /((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,
              [attrTarget, attr]
            ),
            lookbehind: true,
            greedy: true,
            inside: {
              target: {
                pattern: re(/^<<0>>(?=\s*:)/.source, [attrTarget]),
                alias: "keyword"
              },
              "attribute-arguments": {
                pattern: re(/\(<<0>>*\)/.source, [roundExpression]),
                inside: Prism2.languages.csharp
              },
              "class-name": {
                pattern: RegExp(identifier),
                inside: {
                  punctuation: /\./
                }
              },
              punctuation: /[:,]/
            }
          }
        });
        var formatString = /:[^}\r\n]+/.source;
        var mInterpolationRound = nested(
          replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [
            regularStringCharacterOrComment
          ]),
          2
        );
        var mInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [
          mInterpolationRound,
          formatString
        ]);
        var sInterpolationRound = nested(
          replace(
            /[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,
            [regularStringOrCharacter]
          ),
          2
        );
        var sInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [
          sInterpolationRound,
          formatString
        ]);
        function createInterpolationInside(interpolation, interpolationRound) {
          return {
            interpolation: {
              pattern: re(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [interpolation]),
              lookbehind: true,
              inside: {
                "format-string": {
                  pattern: re(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [
                    interpolationRound,
                    formatString
                  ]),
                  lookbehind: true,
                  inside: {
                    punctuation: /^:/
                  }
                },
                punctuation: /^\{|\}$/,
                expression: {
                  pattern: /[\s\S]+/,
                  alias: "language-csharp",
                  inside: Prism2.languages.csharp
                }
              }
            },
            string: /[\s\S]+/
          };
        }
        Prism2.languages.insertBefore("csharp", "string", {
          "interpolation-string": [
            {
              pattern: re(
                /(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,
                [mInterpolation]
              ),
              lookbehind: true,
              greedy: true,
              inside: createInterpolationInside(mInterpolation, mInterpolationRound)
            },
            {
              pattern: re(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [
                sInterpolation
              ]),
              lookbehind: true,
              greedy: true,
              inside: createInterpolationInside(sInterpolation, sInterpolationRound)
            }
          ],
          char: {
            pattern: RegExp(character),
            greedy: true
          }
        });
        Prism2.languages.dotnet = Prism2.languages.cs = Prism2.languages.csharp;
      })(Prism);
    }
  }
});

export {
  require_csharp
};
//# sourceMappingURL=/build/_shared/chunk-3WFB4RJA.js.map
