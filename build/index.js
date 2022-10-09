var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }),
      {
        onShellReady: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError: (err) => {
          reject(err);
        },
        onError: (error) => {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-J6D53IHK.css";

// app/root.tsx
var import_jsx_runtime = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  {
    rel: "stylesheet",
    href: app_default
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Links, {})
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Outlet, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.LiveReload, {})
        ]
      })
    ]
  });
}

// app/routes/operator.$name.tsx
var operator_name_exports = {};
__export(operator_name_exports, {
  default: () => operator_name_default,
  loader: () => loader,
  meta: () => meta2
});
var import_react4 = require("@remix-run/react"), import_react5 = __toESM(require("react"));

// app/operator.server.ts
var import_path = __toESM(require("path")), import_fs = __toESM(require("fs")), import_mdx_bundler = require("mdx-bundler"), operatorPath = import_path.default.join(__dirname, "../", "app", "/operators");
async function getOperator(slug) {
  let filepath = import_path.default.join(operatorPath, slug + ".md"), file = await import_fs.default.readFileSync(filepath, "utf-8"), { code, frontmatter } = await (0, import_mdx_bundler.bundleMDX)({
    source: file,
    cwd: operatorPath
  });
  return { slug, frontmatter, code };
}

// app/routes/operator.$name.tsx
var import_client = require("mdx-bundler/client");

// app/layouts/Header.tsx
var import_react3 = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime"), Header = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
  className: "max-w-screen-2xl ml-auto mr-auto p-4 border-b-[1px] border-gray-300",
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Link, {
    to: "/",
    className: "font-bold",
    children: "JSOperators"
  })
}), Header_default = Header;

// app/constants/operators.tsx
var operators = [
  {
    name: "Addition",
    filename: "addition",
    icon: "+",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition"
  },
  {
    name: "Subtraction",
    icon: "-",
    filename: "subtraction",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction"
  },
  {
    name: "Multiplication",
    icon: "*",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication",
    filename: "multiplication"
  },
  {
    name: "Division",
    icon: "/",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division",
    filename: "division"
  },
  {
    name: "Remainder",
    icon: "%",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder",
    filename: "remainder"
  },
  {
    name: "Exponentiation",
    icon: "**",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation_operator",
    filename: "Exponentiation"
  },
  {
    name: "Bitwise and",
    icon: "&",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND",
    filename: "bitwise-and"
  },
  {
    name: "Bitwise or",
    icon: "|",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR",
    filename: "bitwise-or"
  },
  {
    name: "Bitwise xor",
    icon: "^",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR",
    filename: "bitwise-xor"
  },
  {
    name: "Bitwise not",
    icon: "~",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT",
    filename: "bitwise-not"
  },
  {
    name: "Bitwise shift left",
    icon: "<<",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_shift_left",
    filename: "bitwise-shift-left"
  },
  {
    name: "Bitwise shift right",
    filename: "bitwise-shift-right",
    icon: ">>",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_shift_right"
  },
  {
    name: "Unsigned right shift",
    filename: "unsigned-right-shift",
    icon: ">>>",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift"
  },
  {
    name: "Comparison",
    filename: "comparison",
    icon: "==",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality"
  },
  {
    name: "Inequality",
    filename: "comparison-not-equal",
    icon: "!=",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality"
  },
  {
    name: "Less than",
    filename: "less-than",
    icon: "<",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than"
  },
  {
    name: "Less than or equal",
    filename: "less-than-equal",
    icon: "<=",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal"
  },
  {
    name: "Greater than",
    filename: "greater-than",
    icon: ">",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than"
  },
  {
    name: "Greater than or equal",
    filename: "greater-than-equal",
    icon: ">=",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal"
  },
  {
    name: "Strict comparison",
    filename: "comparison-strict-equal",
    icon: "===",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality"
  },
  {
    name: "Strict inequality",
    filename: "strict-not-equal",
    icon: "!==",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality"
  },
  {
    name: "Logical and",
    filename: "logical-and",
    icon: "&&",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND"
  },
  {
    name: "Logical or",
    filename: "logical-or",
    icon: "||",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR"
  },
  {
    name: "Logical not",
    filename: "logical-not",
    icon: "!",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT"
  },
  {
    name: "Ternary",
    filename: "ternary",
    icon: "?",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"
  },
  {
    name: "Assignment",
    filename: "assignment",
    icon: "=",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment"
  },
  {
    name: "Assignment addition",
    filename: "assignment-addition",
    icon: "+=",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment"
  },
  {
    name: "Assignment subtraction",
    filename: "assignment-subtraction",
    icon: "-=",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment"
  },
  {
    name: "Assignment multiplication",
    filename: "assignment-multiplication",
    icon: "*=",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment"
  },
  {
    name: "Assignment division",
    filename: "assignment-division",
    icon: "/=",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment"
  },
  {
    name: "Optional chaining",
    filename: "optional-chaining",
    icon: "?.",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
  },
  {
    name: "Spread syntax",
    filename: "spread-syntax",
    icon: "...",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
  },
  {
    name: "Rest parameters",
    filename: "rest-parameters",
    icon: "...",
    moreInfo: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters"
  }
];

// app/routes/operator.$name.tsx
var import_jsx_runtime = require("react/jsx-runtime"), loader = async ({ params }) => ({
  operator: await getOperator(params.name)
}), meta2 = ({ data }) => {
  let meta3 = data.operator.frontmatter.meta;
  return {
    title: meta3.title,
    description: meta3.description
  };
}, _Operator = () => {
  let { operator } = (0, import_react4.useLoaderData)(), operatorMeta = operators.find(
    (op) => op.filename === operator.slug.toLowerCase()
  ), Component = import_react5.default.useMemo(
    () => (0, import_client.getMDXComponent)(operator.code),
    [operator.code]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header_default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mt-10 pb-20 w-full max-w-xl ml-auto mr-auto",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
            className: "my-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-6xl text-indigo-600 font-bold",
                children: operatorMeta == null ? void 0 : operatorMeta.icon
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                className: "my-4 text-4xl font-bold",
                children: operator.frontmatter.meta.title
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                className: "underline text-indigo-500",
                href: operatorMeta == null ? void 0 : operatorMeta.moreInfo,
                children: "See more on MDN"
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "prose",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {})
          })
        ]
      })
    ]
  });
}, operator_name_default = _Operator;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome = require("@fortawesome/react-fontawesome"), import_react7 = require("react");

// app/components/operatorButton/operatorButton.tsx
var import_react6 = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime"), OperatorButton = ({ operator }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.Link, {
  to: `/operator/${operator.filename}`,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "flex flex-col items-start bg-white p-4 rounded-lg w-full gap-2 border-2 hover:border-indigo-300 transition-all hover:shadow-lg ",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "text-indigo-500 text-xl font-bold",
        children: operator.icon
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        className: "text-lg font-bold text-gray-700 text-left",
        children: operator.name
      })
    ]
  })
}), operatorButton_default = OperatorButton;

// app/components/operatorList/operatorList.tsx
var import_jsx_runtime = require("react/jsx-runtime"), OperatorList = ({
  operators: operators2,
  search
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
  className: "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mb-8 items-start p-4",
  children: operators2.filter(
    (op) => search ? op.name.toLowerCase().includes(search.toLowerCase()) || op.icon.includes(search) : !0
  ).sort((a, b) => a.name.localeCompare(b.name)).map((op) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(operatorButton_default, {
    operator: op
  }, op.name))
}), operatorList_default = OperatorList;

// app/routes/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Index() {
  let [search, setSearch] = (0, import_react7.useState)("");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "w-screen min-h-screen h-full bg-gray-50 relative p-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
        className: "relative top-10 ml-auto mr-auto w-full z-10",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "w-full max-w-screen-lg ml-auto mr-auto overflow-hidden",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                className: "text-center md:text-4xl text-xl font-bold text-gray-800",
                children: "Javascript Operators"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-center ml-auto mr-auto text-gray-600 mt-6 text-lg md:text-2xl",
                children: "Quick Javascript operator lookup"
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
            className: "mt-10 max-w-screen-lg ml-auto mr-auto relative",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex items-center bg-gray-800 shadow-lg px-4 rounded-full w-full sticky top-10 ",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_fontawesome.FontAwesomeIcon, {
                    icon: import_free_solid_svg_icons.faSearch,
                    className: "text-gray-300 pr-2",
                    style: { width: "30px" }
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                    type: "search",
                    placeholder: "Search by name...",
                    className: "bg-transparent w-full outline-none  p-4 text-white ",
                    onInput: (e) => setSearch(e.currentTarget.value),
                    value: search,
                    name: "search"
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(operatorList_default, {
                operators,
                search
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "bg absolute top-0 w-full",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          width: "100%",
          height: "560",
          preserveAspectRatio: "none",
          viewBox: "0 0 1440 560",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
              mask: 'url("#SvgjsMask1036")',
              fill: "none",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
                  width: "1440",
                  height: "560",
                  x: "0",
                  y: "0",
                  fill: "rgba(255, 255, 255, 1)"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                  d: "M 0,271 C 96,318.6 288,512 480,509 C 672,506 768,254.4 960,256 C 1152,257.6 1344,464.8 1440,517L1440 560L0 560z",
                  fill: "rgba(249, 250, 251, 1)"
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mask", {
                id: "SvgjsMask1036",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
                  width: "1440",
                  height: "560",
                  fill: "#ffffff"
                })
              })
            })
          ]
        })
      })
    ]
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "f5e72f4c", entry: { module: "/build/entry.client-GNA7B3V4.js", imports: ["/build/_shared/chunk-FTQG24DN.js", "/build/_shared/chunk-MYU76JSC.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DTKHSB3S.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-R4YAFETX.js", imports: ["/build/_shared/chunk-I4DBOIGY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/operator.$name": { id: "routes/operator.$name", parentId: "root", path: "operator/:name", index: void 0, caseSensitive: void 0, module: "/build/routes/operator.$name-L6MHPJPD.js", imports: ["/build/_shared/chunk-I4DBOIGY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-F5E72F4C.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/operator.$name": {
    id: "routes/operator.$name",
    parentId: "root",
    path: "operator/:name",
    index: void 0,
    caseSensitive: void 0,
    module: operator_name_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
