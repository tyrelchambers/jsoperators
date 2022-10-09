import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-IL2CY6UE.js";
import {
  __toESM
} from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/operator.$name.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Operator = () => {
  const { operator } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mt-10 pb-20 w-full max-w-xl",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "mb-2 text-indigo-500 text-5xl font-bold",
        children: operator.icon
      }, void 0, false, {
        fileName: "app/routes/operator.$name.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "text-4xl font-bold text-gray-800",
        children: operator.name
      }, void 0, false, {
        fileName: "app/routes/operator.$name.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
        href: operator.moreInfo,
        className: "block mt-4 text-indigo-500",
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, {
            icon: faArrowUpRightFromSquare
          }, void 0, false, {
            fileName: "app/routes/operator.$name.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          " More info"
        ]
      }, void 0, true, {
        fileName: "app/routes/operator.$name.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-10",
        children: operator.component
      }, void 0, false, {
        fileName: "app/routes/operator.$name.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/operator.$name.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};
var operator_name_default = Operator;
export {
  operator_name_default as default
};
//# sourceMappingURL=/build/routes/operator.$name-ICJKWQDM.js.map
