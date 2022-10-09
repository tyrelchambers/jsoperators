import {
  FontAwesomeIcon,
  faFaceSadTear
} from "/build/_shared/chunk-BTBL3IWW.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-W5Z5A5GB.js";

// empty-module:~/operator.server
var require_operator = __commonJS({
  "empty-module:~/operator.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/operator.$name.tsx
var import_operator = __toESM(require_operator());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Operator = () => {
  const { operator } = useLoaderData();
  console.log(operator);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mt-10 pb-20 w-full max-w-xl",
    children: !operator && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col items-center mt-20",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, {
          icon: faFaceSadTear,
          className: "text-indigo-500 text-6xl mb-10",
          style: { width: "30px" }
        }, void 0, false, {
          fileName: "app/routes/operator.$name.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "font-bold text-gray-800 mb-2",
          children: "Doesn't look like there are any operators matching that name or icon"
        }, void 0, false, {
          fileName: "app/routes/operator.$name.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "text-gray-600",
          children: "There's a chance this operator was missed"
        }, void 0, false, {
          fileName: "app/routes/operator.$name.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/operator.$name.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/routes/operator.$name.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};
var operator_name_default = Operator;
export {
  operator_name_default as default
};
//# sourceMappingURL=/build/routes/operator.$name-QZBBXWPG.js.map
