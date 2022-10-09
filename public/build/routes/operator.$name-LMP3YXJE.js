import {
  FontAwesomeIcon,
  faArrowUpRightFromSquare,
  faFaceSadTear
} from "/build/_shared/chunk-XZOT5YO7.js";
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
    children: [
      !operator && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "mb-2 text-indigo-500 text-5xl font-bold",
        children: operator.icon
      }, void 0, false, {
        fileName: "app/routes/operator.$name.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "text-4xl font-bold text-gray-800",
        children: operator.name
      }, void 0, false, {
        fileName: "app/routes/operator.$name.tsx",
        lineNumber: 40,
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
            lineNumber: 47,
            columnNumber: 9
          }, this),
          " More info"
        ]
      }, void 0, true, {
        fileName: "app/routes/operator.$name.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-10",
        children: operator.component
      }, void 0, false, {
        fileName: "app/routes/operator.$name.tsx",
        lineNumber: 49,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/operator.$name.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
};
var operator_name_default = Operator;
export {
  operator_name_default as default
};
//# sourceMappingURL=/build/routes/operator.$name-LMP3YXJE.js.map
