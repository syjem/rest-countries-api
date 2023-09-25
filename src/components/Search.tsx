import React, { useState } from "react";
// import { GrSearch } from "react-icons/gr";
import { GoSearch } from "react-icons/go";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="py-3 px-4 w-full bg-dark-blue flex items-center gap-2 rounded-md text-white max-w-md">
      <GoSearch className="text-xl text-white" />
      <input
        type="text"
        name="search"
        id="search"
        autoComplete="off"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search for a country..."
        className="border-0 outline-0 p-1 bg-dark-blue w-full focus:outline-none md:text-lg placeholder:text-slate-200"
      />
    </div>
  );
};

export default Search;
