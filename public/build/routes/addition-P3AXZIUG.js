import {
  __toESM,
  require_react
} from "/build/_shared/chunk-IQ4A4ZBO.js";

// mdx:routes/addition.md
var import_react = __toESM(require_react());
var attributes = {
  "meta": {
    "title": "Addition operator",
    "description": "This addition operator servers two purposes - one for mathematical equations and one for concatinating strings."
  }
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    strong: "strong",
    code: "code",
    em: "em"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(_components.h2, null, "Numbers"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "This addition operator servers two purposes: one for mathematical\nequations and one for concatinating strings."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Another weird example of addition happens when you add a ", /* @__PURE__ */ import_react.default.createElement(_components.strong, null, "boolean"), " to a ", /* @__PURE__ */ import_react.default.createElement(_components.strong, null, "number"), "."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, /* @__PURE__ */ import_react.default.createElement(_components.code, null, "console.log(1 + true); // 2")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "This happens because in computer-speak, ", /* @__PURE__ */ import_react.default.createElement(_components.strong, null, "true"), " represents\na 1 and ", /* @__PURE__ */ import_react.default.createElement(_components.strong, null, /* @__PURE__ */ import_react.default.createElement(_components.em, null, "false")), ' represents a 0. Remember the video game\nconsoles of the old days (Playstation 2) specifically or even modern\ncomputer power supplies, there is a "1" and a "0" on the power switch to\nrepresent on and off.'), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "In our example, ", /* @__PURE__ */ import_react.default.createElement(_components.strong, null, "true"), ' is actually a "1". Just to further\nexplain this, look at this example showing how ', /* @__PURE__ */ import_react.default.createElement(_components.strong, null, "false"), " is\nused."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, /* @__PURE__ */ import_react.default.createElement(_components.code, null, "console.log(1 + false); // 1")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h2, null, "Strings"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "If a number and a string are used together, they actually behave a\nlittle differently."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, /* @__PURE__ */ import_react.default.createElement(_components.code, null, "console.log(1 + '1'); // 11")), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "It literally adds the number to the string."));
  return MDXLayout ? /* @__PURE__ */ import_react.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var addition_default = MDXContent;
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta = typeof attributes !== "undefined" && attributes.meta;
export {
  addition_default as default,
  meta
};
//# sourceMappingURL=/build/routes/addition-P3AXZIUG.js.map
