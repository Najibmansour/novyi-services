import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="mx-10 max-w-md ">
      <div className="relative flex h-10 items-center overflow-hidden rounded-full focus-within:shadow-lg md:w-80 md:bg-white">
        <input
          className=" hidden h-full pl-3 text-sm text-gray-700 outline-none md:block md:w-full"
          type="text"
          id="search"
          placeholder="Search something.."
        />
        <div className="grid h-full place-items-center text-gray-300 md:w-12 ">
          <div className="bg-red-700 flex flex-row justify-center items-center rounded-full mr-5 w-10 h-7 hover:bg-red-800 transition-all active:scale-95">
            <SearchIcon className="h-9 w-9 text-white md:h-5 md:w-5 md:text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
