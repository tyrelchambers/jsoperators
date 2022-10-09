import { Link } from "@remix-run/react";
import React from "react";

const Header = () => {
  return (
    <header className="max-w-screen-2xl ml-auto mr-auto p-4 border-b-[1px] border-gray-300">
      <Link to="/" className="font-bold">
        JSOperators
      </Link>
    </header>
  );
};

export default Header;
