import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/refractor/lang/gedcom.js
var require_gedcom = __commonJS({
  "node_modules/refractor/lang/gedcom.js"(exports, module) {
    module.exports = gedcom;
    gedcom.displayName = "gedcom";
    gedcom.aliases = [];
    function gedcom(Prism) {
      Prism.languages.gedcom = {
        "line-value": {
          pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,
          lookbehind: true,
          inside: {
            pointer: {
              pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
              alias: "variable"
            }
          }
        },
        tag: {
          pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
          lookbehind: true,
          alias: "string"
        },
        level: {
          pattern: /(^[\t ]*)\d+/m,
          lookbehind: true,
          alias: "number"
        },
        pointer: {
          pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
          alias: "variable"
        }
      };
    }
  }
});

export {
  require_gedcom
};
//# sourceMappingURL=/build/_shared/chunk-SAISOO7C.js.map
