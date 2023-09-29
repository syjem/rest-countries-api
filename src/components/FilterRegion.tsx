import useTheme from "../context/useTheme";
import { FiChevronDown } from "react-icons/fi";
import { useCountries } from "../context/useCountries";

const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];

const FilterRegion = () => {
  const { theme } = useTheme();
  const { region, handleShowFilter, handleChangeFilter, showFilter } =
    useCountries();

  const bg = theme == "dark" ? "bg-dark-blue" : "bg-slate-50";
  const textColor = theme == "dark" ? "text-white" : "dark-blue-bg";
  const hoverBg = theme === "dark" ? "hover:bg-gray-600" : "hover:bg-gray-200";

  return (
    <div
      className={`${bg} ${textColor} w-full mt-8 md:mt-0 rounded-md max-w-[210px] relative cursor-pointer shadow-md`}
    >
      <div onClick={handleShowFilter} className="flex justify-between p-4">
        <span className="text-base md:text-lg ">{region}</span>
        <FiChevronDown
          className={` ${
            showFilter ? "rotate-180" : "rotate-0"
          } text-lg transition-transform `}
        />
      </div>

      <ul
        className={`${
          showFilter ? "block" : "hidden opacity-0"
        }  opacity-100 absolute top-[110%] left-0 bg-inherit w-full list-none py-3 rounded-md transition-opacity z-10`}
      >
        {continents.map((continent) => (
          <li
            key={continent}
            className={`${hoverBg} cursor-pointer px-4 py-1`}
            onClick={() => handleChangeFilter(continent)}
          >
            {continent}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterRegion;
