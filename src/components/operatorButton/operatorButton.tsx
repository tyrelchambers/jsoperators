import React from 'react'
import { Operator } from '../../types'


const OperatorButton = ({operator, clickHandler}: { operator: Operator, clickHandler:any })  => {
  return (
    <button onClick={() => clickHandler(operator)} key={operator.name}>
        <div className="flex flex-col items-start bg-white p-4 rounded-lg w-full gap-2 border-2 hover:border-indigo-300 transition-all hover:shadow-lg ">
          <p className="text-indigo-500 text-xl font-bold">
            {operator.icon}
          </p>
          <h2 className="text-lg font-bold text-gray-700 text-left">
            {operator.name}
          </h2>
        </div>
    </button>
  )
}

export default OperatorButton