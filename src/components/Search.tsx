import { GoSearch } from "react-icons/go";
import useTheme from "../context/useTheme";
import { useCountries } from "../context/useCountries";

const Search = () => {
  const { theme } = useTheme();
  const { searchCountry, handleChange } = useCountries();

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
        value={searchCountry}
        onChange={handleChange}
        placeholder="Search for a country..."
        className="border-0 outline-0 p-1 bg-inherit w-full focus:outline-none md:text-lg"
      />
    </div>
  );
};

export default Search;
