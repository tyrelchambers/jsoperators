import React, { useEffect } from "react";
import { Search, useNavigate, useSearch } from "@tanstack/react-location";
import {
  faArrowUpRightFromSquare,
  faFaceSadTear,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Operator } from "./types";
import { operators } from "./constants/operators";
import OperatorList from './components/operatorList/operatorList'

function App() {
  const search = useSearch<Search<{ name: string }>>();

  const operator =
    search.name &&
    operators.find(
      (o) =>
        // @ts-ignore
        o.name.toLowerCase().includes(search.name.toLowerCase()) ||
        o.icon === search.name
    );

  const navigate = useNavigate();

  useEffect(() => {
    if (!search.name) {
      navigate({
        search: {},
      });
    }
  }, [search]);

  const clickHandler = (op: Operator) => {
    navigate({
      search: {
        name: op.name,
      },
    });
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate({
      search: {
        name: e.target.value,
      },
    });
  };
  return (
    <div className="w-screen min-h-screen h-full bg-gray-50 relative p-4">
      <main className="relative top-10 ml-auto mr-auto w-full z-10">
        <div className="w-full max-w-screen-lg ml-auto mr-auto overflow-hidden">
          <h1 className="text-center md:text-4xl text-xl font-bold text-gray-800">
            Javascript Operators
          </h1>
          <p className="text-center ml-auto mr-auto text-gray-600 mt-6 text-lg md:text-2xl">
            Quick Javascript operator lookup
          </p>
        </div>

        <section className="mt-10 max-w-screen-lg ml-auto mr-auto relative">
          <div className="flex items-center bg-gray-800 shadow-lg px-4 rounded-full w-full sticky top-10 ">
            <FontAwesomeIcon icon={faSearch} className="text-gray-300 pr-2" />
            <input
              type="search"
              placeholder="Search by name..."
              className="bg-transparent w-full outline-none  p-4 text-white "
              onInput={inputHandler}
              value={search.name}
            ></input>
          </div>

          {!operator && search.name && (
            <div className="flex flex-col items-center mt-20">
              <FontAwesomeIcon
                icon={faFaceSadTear}
                className="text-indigo-500 text-6xl mb-10"
              />
              <p className="font-bold text-gray-800 mb-2">
                Doesn't look like there are any operators matching that name or
                icon
              </p>
              <p className="text-gray-600">
                There's a chance this operator was missed
              </p>
            </div>
          )}

          {operator && (
            <div className="mt-10 pb-20 w-full max-w-xl">
              <p className="mb-2 text-indigo-500 text-5xl font-bold">
                {operator.icon}
              </p>
              <h2 className="text-4xl font-bold text-gray-800">
                {operator.name}
              </h2>
              <a
                href={operator.moreInfo}
                className="block mt-4 text-indigo-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> More info
              </a>
              <div className="mt-10">{operator.component}</div>
            </div>
          )}

          {!search.name && (
            <OperatorList operators={operators} search={search} clickHandler={clickHandler}/>
          )}
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
