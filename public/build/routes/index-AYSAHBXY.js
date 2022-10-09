import {
  require_jsx_dev_runtime,
  require_react,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-IL2CY6UE.js";
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
      navigate({
        search: {}
      });
    }
  }, [searchName]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-screen min-h-screen h-full bg-gray-50 relative p-4"
  }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-AYSAHBXY.js.map
