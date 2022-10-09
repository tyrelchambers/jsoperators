import {
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-B2VVMEEX.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3CPB4T5C.js";
import {
  __toESM
} from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/index.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const { _operators, searchName } = useLoaderData();
  const navigate = useNavigate();
  (0, import_react2.useEffect)(() => {
    if (!searchName) {
      navigate("/");
    }
  }, [searchName]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-screen min-h-screen h-full bg-gray-50 relative p-4"
  }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-BJM2AFEX.js.map
