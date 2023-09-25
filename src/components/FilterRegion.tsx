import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];

const FilterRegion = () => {
  const [filterValue, setFilterValue] = useState("Filter by Region");
  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleChangeFilter = (filter: string) => {
    setFilterValue(filter);
    setShowFilter(!showFilter);
  };

  return (
    <div className="text-white bg-dark-blue w-full mt-8 md:mt-0 rounded-md max-width relative cursor-pointer">
      <div onClick={handleShowFilter} className="flex justify-between p-4">
        <span className="text-base md:text-lg ">{filterValue}</span>
        <FiChevronDown
          className={` ${
            showFilter ? "rotate-180" : "rotate-0"
          } text-lg transition-transform `}
        />
      </div>

      <ul
        className={`${
          showFilter ? "block" : "hidden opacity-0"
        }  opacity-100 absolute top-[110%] left-0 bg-dark-blue w-full list-none text-white py-3 rounded-md transition-opacity z-10`}
      >
        {continents.map((list) => (
          <li
            key={list}
            className="cursor-pointer px-4 py-1 hover:bg-gray-600"
            onClick={() => handleChangeFilter(list)}
          >
            {list}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterRegion;
