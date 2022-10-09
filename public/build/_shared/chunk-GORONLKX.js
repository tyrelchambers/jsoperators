import {
  __commonJS
} from "/build/_shared/chunk-42Z7WWMI.js";

// node_modules/refractor/lang/peoplecode.js
var require_peoplecode = __commonJS({
  "node_modules/refractor/lang/peoplecode.js"(exports, module) {
    module.exports = peoplecode;
    peoplecode.displayName = "peoplecode";
    peoplecode.aliases = ["pcode"];
    function peoplecode(Prism) {
      Prism.languages.peoplecode = {
        comment: RegExp(
          [
            /\/\*[\s\S]*?\*\//.source,
            /\bREM[^;]*;/.source,
            /<\*(?:[^<*]|\*(?!>)|<(?!\*)|<\*(?:(?!\*>)[\s\S])*\*>)*\*>/.source,
            /\/\+[\s\S]*?\+\//.source
          ].join("|")
        ),
        string: {
          pattern: /'(?:''|[^'\r\n])*'(?!')|"(?:""|[^"\r\n])*"(?!")/,
          greedy: true
        },
        variable: /%\w+/,
        "function-definition": {
          pattern: /((?:^|[^\w-])(?:function|method)\s+)\w+/i,
          lookbehind: true,
          alias: "function"
        },
        "class-name": {
          pattern: /((?:^|[^-\w])(?:as|catch|class|component|create|extends|global|implements|instance|local|of|property|returns)\s+)\w+(?::\w+)*/i,
          lookbehind: true,
          inside: {
            punctuation: /:/
          }
        },
        keyword: /\b(?:abstract|alias|as|catch|class|component|constant|create|declare|else|end-(?:class|evaluate|for|function|get|if|method|set|try|while)|evaluate|extends|for|function|get|global|if|implements|import|instance|library|local|method|null|of|out|peopleCode|private|program|property|protected|readonly|ref|repeat|returns?|set|step|then|throw|to|try|until|value|when(?:-other)?|while)\b/i,
        "operator-keyword": {
          pattern: /\b(?:and|not|or)\b/i,
          alias: "operator"
        },
        function: /[_a-z]\w*(?=\s*\()/i,
        boolean: /\b(?:false|true)\b/i,
        number: /\b\d+(?:\.\d+)?\b/,
        operator: /<>|[<>]=?|!=|\*\*|[-+*/|=@]/,
        punctuation: /[:.;,()[\]]/
      };
      Prism.languages.pcode = Prism.languages.peoplecode;
    }
  }
});

export {
  require_peoplecode
};
//# sourceMappingURL=/build/_shared/chunk-GORONLKX.js.map
