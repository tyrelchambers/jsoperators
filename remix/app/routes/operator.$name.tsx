import {
  faArrowUpRightFromSquare,
  faFaceSadTear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import { getOperator } from "~/operator.server";
import { getMDXComponent } from "mdx-bundler/client";
import Header from "~/layouts/Header";
import { operators } from "~/constants/operators";

export const loader: LoaderFunction = async ({ params }) => {
  const operator = await getOperator(params.name);
  return {
    operator,
  };
};

const _Operator = () => {
  const { operator } = useLoaderData();
  const operatorMeta = operators.find(
    (op) => op.filename === operator.slug.toLowerCase()
  );

  const Component = React.useMemo(
    () => getMDXComponent(operator.code),
    [operator.code]
  );

  return (
    <>
      <Header />
      <div className="mt-10 pb-20 w-full max-w-xl ml-auto mr-auto">
        <header className="my-6">
          <p className="text-6xl text-indigo-600 font-bold">
            {operatorMeta?.icon}
          </p>
          <h1 className="my-4 text-4xl font-bold">
            {operator.frontmatter.meta.title}
          </h1>
          <a
            className="underline text-indigo-500"
            href={operatorMeta?.moreInfo}
          >
            See more on MDN
          </a>
        </header>
        <div className="prose">
          <Component />
        </div>
      </div>
    </>
  );
};

export default _Operator;
