import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { operators } from "./constants/operators";
import { useState } from "react";

function App() {
  const [search, useSearch] = useState("");

  return (
    <div className="w-screen h-screen bg-gray-50 relative">
      <main className="absolute top-10 ml-auto mr-auto w-full z-10">
        <div className="w-full max-w-screen-lg ml-auto mr-auto overflow-hidden">
          <h1 className="text-center text-4xl font-bold text-gray-800">
            Javascript Operators
          </h1>
          <p className="text-center ml-auto mr-auto text-gray-600 mt-6 text-2xl">
            Quick Javascript operator lookup
          </p>
        </div>

        <section className="mt-10 max-w-screen-lg ml-auto mr-auto relative">
          <div className="flex items-center bg-gray-900 shadow-lg px-4 rounded-full w-full sticky top-10 ">
            <FontAwesomeIcon icon={faSearch} className="text-gray-300 pr-2" />
            <input
              type="search"
              placeholder="Search by name..."
              className="bg-transparent w-full outline-none  p-4 text-white "
              onInput={(e) => useSearch(e.target.value)}
            ></input>
          </div>

          <div className="grid grid-cols-4 gap-6 mt-8">
            {operators
              .filter((op) =>
                search
                  ? op.name.toLowerCase().includes(search.toLowerCase()) ||
                    op.icon.includes(search)
                  : true
              )
              .map((op) => (
                <div className="flex flex-col bg-gray-100 p-4 rounded-lg w-full gap-2">
                  <p className="text-indigo-500 text-xl font-bold">{op.icon}</p>
                  <h2 className="text-lg font-bold text-gray-700">{op.name}</h2>
                </div>
              ))}
          </div>
        </section>
      </main>
      <div className="bg absolute top-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="560"
          preserveAspectRatio="none"
          viewBox="0 0 1440 560"
        >
          <g mask='url("#SvgjsMask1036")' fill="none">
            <rect
              width="1440"
              height="560"
              x="0"
              y="0"
              fill="rgba(255, 255, 255, 1)"
            ></rect>
            <path
              d="M 0,271 C 96,318.6 288,512 480,509 C 672,506 768,254.4 960,256 C 1152,257.6 1344,464.8 1440,517L1440 560L0 560z"
              fill="rgba(249, 250, 251, 1)"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1036">
              <rect width="1440" height="560" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default App;
