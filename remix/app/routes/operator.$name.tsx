import {
  faArrowUpRightFromSquare,
  faFaceSadTear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import { operators } from "~/constants/operators";

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const name = url.searchParams.get("name") as string;

  return {
    operator: name ? operators[name] : null,
  };
};

const Operator = () => {
  const { operator } = useLoaderData();

  return (
    <div className="mt-10 pb-20 w-full max-w-xl">
      {!operator && (
        <div className="flex flex-col items-center mt-20">
          <FontAwesomeIcon
            icon={faFaceSadTear}
            className="text-indigo-500 text-6xl mb-10"
          />
          <p className="font-bold text-gray-800 mb-2">
            Doesn't look like there are any operators matching that name or icon
          </p>
          <p className="text-gray-600">
            There's a chance this operator was missed
          </p>
        </div>
      )}
      <p className="mb-2 text-indigo-500 text-5xl font-bold">{operator.icon}</p>
      <h2 className="text-4xl font-bold text-gray-800">{operator.name}</h2>
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
  );
};

export default Operator;
