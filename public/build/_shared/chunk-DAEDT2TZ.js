import {
  __commonJS
} from "/build/_shared/chunk-42Z7WWMI.js";

// node_modules/refractor/lang/vhdl.js
var require_vhdl = __commonJS({
  "node_modules/refractor/lang/vhdl.js"(exports, module) {
    module.exports = vhdl;
    vhdl.displayName = "vhdl";
    vhdl.aliases = [];
    function vhdl(Prism) {
      Prism.languages.vhdl = {
        comment: /--.+/,
        "vhdl-vectors": {
          pattern: /\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,
          alias: "number"
        },
        "quoted-function": {
          pattern: /"\S+?"(?=\()/,
          alias: "function"
        },
        string: /"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,
        constant: /\b(?:library|use)\b/i,
        keyword: /\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\b/i,
        boolean: /\b(?:false|true)\b/i,
        function: /\w+(?=\()/,
        number: /'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,
        operator: /[<>]=?|:=|[-+*/&=]|\b(?:abs|and|mod|nand|nor|not|or|rem|rol|ror|sla|sll|sra|srl|xnor|xor)\b/i,
        punctuation: /[{}[\];(),.:]/
      };
    }
  }
});

export {
  require_vhdl
};
//# sourceMappingURL=/build/_shared/chunk-DAEDT2TZ.js.map
