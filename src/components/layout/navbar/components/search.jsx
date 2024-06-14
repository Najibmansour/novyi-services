import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="mx-auto max-w-md ">
      <div className="relative flex h-10 items-center overflow-hidden rounded-full focus-within:shadow-lg md:w-80 md:bg-white">
        <div className="grid h-full place-items-center text-gray-300 md:w-10">
          <SearchIcon className="h-9 w-9 text-white md:h-5 md:w-5 md:text-gray-300" />
        </div>

        <input
          className=" hidden h-full pr-2 text-sm text-gray-700 outline-none md:block md:w-full"
          type="text"
          id="search"
          placeholder="Search something.."
        />
      </div>
    </div>
  );
};

export default Search;
