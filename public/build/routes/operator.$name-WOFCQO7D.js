import {
  FontAwesomeIcon,
  faFaceSadTear
} from "/build/_shared/chunk-GLG6WP7S.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-W5Z5A5GB.js";

// app/routes/operator.$name.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Operator = () => {
  const { operator } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mt-10 pb-20 w-full max-w-xl",
    children: !operator && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col items-center mt-20",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, {
          icon: faFaceSadTear,
          className: "text-indigo-500 text-6xl mb-10"
        }, void 0, false, {
          fileName: "app/routes/operator.$name.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "font-bold text-gray-800 mb-2",
          children: "Doesn't look like there are any operators matching that name or icon"
        }, void 0, false, {
          fileName: "app/routes/operator.$name.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "text-gray-600",
          children: "There's a chance this operator was missed"
        }, void 0, false, {
          fileName: "app/routes/operator.$name.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/operator.$name.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/routes/operator.$name.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
};
var operator_name_default = Operator;
export {
  operator_name_default as default
};
//# sourceMappingURL=/build/routes/operator.$name-WOFCQO7D.js.map
