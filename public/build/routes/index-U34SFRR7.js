import {
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useNavigate
} from "/build/_shared/chunk-ILCRJPRS.js";

// app/routes/index.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const search = useSearch();
  const operator = search.name && operators.find(
    (o) => o.name.toLowerCase().includes(search.name.toLowerCase()) || o.icon === search.name
  );
  const navigate = useNavigate();
  (0, import_react2.useEffect)(() => {
    if (!search.name) {
      navigate({
        search: {}
      });
    }
  }, [search]);
  const clickHandler = (op) => {
    navigate({
      search: {
        name: op.name
      }
    });
  };
  const inputHandler = (e) => {
    navigate({
      search: {
        name: e.target.value
      }
    });
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
                lineNumber: 45,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-center ml-auto mr-auto text-gray-600 mt-6 text-lg md:text-2xl",
                children: "Quick Javascript operator lookup"
              }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 48,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 44,
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
                    className: "text-gray-300 pr-2"
                  }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 55,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "search",
                    placeholder: "Search by name...",
                    className: "bg-transparent w-full outline-none  p-4 text-white ",
                    onInput: inputHandler,
                    value: search.name
                  }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 56,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/index.tsx",
                lineNumber: 54,
                columnNumber: 11
              }, this),
              !operator && search.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-col items-center mt-20",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, {
                    icon: faFaceSadTear,
                    className: "text-indigo-500 text-6xl mb-10"
                  }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 67,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "font-bold text-gray-800 mb-2",
                    children: "Doesn't look like there are any operators matching that name or icon"
                  }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 71,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "text-gray-600",
                    children: "There's a chance this operator was missed"
                  }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 75,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/index.tsx",
                lineNumber: 66,
                columnNumber: 13
              }, this),
              operator && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-10 pb-20 w-full max-w-xl",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "mb-2 text-indigo-500 text-5xl font-bold",
                    children: operator.icon
                  }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 83,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                    className: "text-4xl font-bold text-gray-800",
                    children: operator.name
                  }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 86,
                    columnNumber: 15
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
                        fileName: "app/routes/index.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                      }, this),
                      " More info"
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 89,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "mt-10",
                    children: operator.component
                  }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 97,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/index.tsx",
                lineNumber: 82,
                columnNumber: 13
              }, this),
              !search.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OperatorList, {
                operators,
                search,
                clickHandler
              }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 102,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 43,
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
                  lineNumber: 120,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                  d: "M 0,271 C 96,318.6 288,512 480,509 C 672,506 768,254.4 960,256 C 1152,257.6 1344,464.8 1440,517L1440 560L0 560z",
                  fill: "rgba(249, 250, 251, 1)"
                }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 127,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/index.tsx",
              lineNumber: 119,
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
                  lineNumber: 134,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 133,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 132,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 111,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 110,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-U34SFRR7.js.map
