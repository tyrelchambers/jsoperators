import React from "react";
import { Operator } from "../../../../src/types";
import OperatorButton from "../operatorButton/operatorButton";

const OperatorList = ({
  operators,
  search,
  clickHandler,
}: {
  operators: any;
  search: any;
  clickHandler: any;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mb-8 items-start p-4">
      {operators
        .filter((op: Operator) =>
          search.name
            ? op.name.toLowerCase().includes(search.name.toLowerCase()) ||
              op.icon.includes(search.name)
            : true
        )
        .sort((a: any, b: any) => a.name.localeCompare(b.name))
        .map((op: Operator) => (
          <OperatorButton
            key={op.name}
            operator={op}
            clickHandler={clickHandler}
          />
        ))}
    </div>
  );
};

export default OperatorList;
