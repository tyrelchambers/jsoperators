import {
  FontAwesomeIcon,
  faSearch,
  operators
} from "/build/_shared/chunk-A74KHNYH.js";
import {
  Link,
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-W5Z5A5GB.js";

// app/routes/index.tsx
var import_react3 = __toESM(require_react());

// app/components/operatorButton/operatorButton.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var OperatorButton = ({
  operator,
  clickHandler
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
    to: `/${operator.name}`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col items-start bg-white p-4 rounded-lg w-full gap-2 border-2 hover:border-indigo-300 transition-all hover:shadow-lg ",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "text-indigo-500 text-xl font-bold",
          children: operator.icon
        }, void 0, false, {
          fileName: "app/components/operatorButton/operatorButton.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "text-lg font-bold text-gray-700 text-left",
          children: operator.name
        }, void 0, false, {
          fileName: "app/components/operatorButton/operatorButton.tsx",
          lineNumber: 16,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/operatorButton/operatorButton.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/operatorButton/operatorButton.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
};
var operatorButton_default = OperatorButton;

// app/components/operatorList/operatorList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var OperatorList = ({
  operators: operators2,
  search,
  clickHandler
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mb-8 items-start p-4",
    children: operators2.filter(
      (op) => search.name ? op.name.toLowerCase().includes(search.name.toLowerCase()) || op.icon.includes(search.name) : true
    ).sort((a, b) => a.name.localeCompare(b.name)).map((op) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(operatorButton_default, {
      operator: op,
      clickHandler
    }, op.name, false, {
      fileName: "app/components/operatorList/operatorList.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this))
  }, void 0, false, {
    fileName: "app/components/operatorList/operatorList.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};
var operatorList_default = OperatorList;

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const { searchName } = useLoaderData();
  const navigate = useNavigate();
  (0, import_react3.useEffect)(() => {
    if (!searchName) {
      navigate("/");
    }
  }, [searchName]);
  const clickHandler = (op) => {
  };
  const inputHandler = (e) => {
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-screen min-h-screen h-full bg-gray-50 relative p-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
        className: "relative top-10 ml-auto mr-auto w-full z-10",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "w-full max-w-screen-lg ml-auto mr-auto overflow-hidden",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-center md:text-4xl text-xl font-bold text-gray-800",
                children: "Javascript Operators"
              }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 35,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-center ml-auto mr-auto text-gray-600 mt-6 text-lg md:text-2xl",
                children: "Quick Javascript operator lookup"
              }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 38,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
            className: "mt-10 max-w-screen-lg ml-auto mr-auto relative",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center bg-gray-800 shadow-lg px-4 rounded-full w-full sticky top-10 ",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, {
                    icon: faSearch,
                    className: "text-gray-300 pr-2",
                    style: { width: "30px" }
                  }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 45,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "search",
                    placeholder: "Search by name...",
                    className: "bg-transparent w-full outline-none  p-4 text-white ",
                    onInput: inputHandler,
                    value: searchName,
                    name: "search"
                  }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 50,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/index.tsx",
                lineNumber: 44,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(operatorList_default, {
                operators,
                search: searchName,
                clickHandler
              }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 60,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg absolute top-0 w-full",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          width: "100%",
          height: "560",
          preserveAspectRatio: "none",
          viewBox: "0 0 1440 560",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
              mask: 'url("#SvgjsMask1036")',
              fill: "none",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
                  width: "1440",
                  height: "560",
                  x: "0",
                  y: "0",
                  fill: "rgba(255, 255, 255, 1)"
                }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 77,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                  d: "M 0,271 C 96,318.6 288,512 480,509 C 672,506 768,254.4 960,256 C 1152,257.6 1344,464.8 1440,517L1440 560L0 560z",
                  fill: "rgba(249, 250, 251, 1)"
                }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 84,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/index.tsx",
              lineNumber: 76,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mask", {
                id: "SvgjsMask1036",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
                  width: "1440",
                  height: "560",
                  fill: "#ffffff"
                }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 91,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 90,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 89,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-TS5AGIHT.js.map
