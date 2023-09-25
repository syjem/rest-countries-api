import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import useTheme from "../context/useTheme";

const Search = () => {
  const { theme } = useTheme();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const bg = theme == "dark" ? "bg-dark-blue" : "bg-slate-50";
  const textColor = theme == "dark" ? "text-white" : "dark-blue-bg";

  return (
    <div
      className={`${bg} ${textColor} py-3 px-4 w-full flex items-center gap-2 rounded-md max-w-md`}
    >
      <GoSearch className="text-xl text-inherit" />
      <input
        type="text"
        name="search"
        id="search"
        autoComplete="off"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search for a country..."
        className="border-0 outline-0 p-1 bg-inherit w-full focus:outline-none md:text-lg"
      />
    </div>
  );
};

export default Search;
