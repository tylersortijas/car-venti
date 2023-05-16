import React from "react";
import { BsFillCarFrontFill } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="p-5">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="flex items-center gap-8 uppercase">
          <div className="flex justify-around items-center gap-2">
            <div className="bg-blue-500 rounded-full p-2">
              <BsFillCarFrontFill className="text-xl text-white" />
            </div>
            <h1 className="text-xl">
              Car<span className="font-bold">venti</span>
            </h1>
          </div>
          <div>
            <ul className="lg:flex justify-around items-center gap-3 font-semibold hidden">
              <li className="hover:text-blue-400 cursor-pointer">
                Search Cars
              </li>
              <li className="hover:text-blue-400 cursor-pointer">Sell/Trade</li>
              <li className="hover:text-blue-400 cursor-pointer">Financing</li>
            </ul>
          </div>
        </div>
        <div>
          <button className="uppercase text-sm font-semibold text-blue-400 hover:text-blue-800">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
