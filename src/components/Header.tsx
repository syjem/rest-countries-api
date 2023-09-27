import { BsSun } from "react-icons/bs";
import { Link } from "react-router-dom";
import useTheme from "../context/useTheme";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const bg = theme == "dark" ? "bg-dark-blue" : "bg-slate-50";
  const textColor = theme == "dark" ? "text-white" : "dark-blue-bg";
  return (
    <header className={`${bg} w-full px-6 py-8 md:px-14 shadow-sm sticky`}>
      <nav className="flex justify-between items-center max-container transition-all">
        <Link to="/" className={`${textColor} text-base md:text-xl font-800`}>
          Where in the world?
        </Link>
        <span
          className={`${textColor} flex items-center gap-2 text-base md:text-lg py-1 cursor-pointer`}
          onClick={() => toggleTheme()}
        >
          {theme === "dark" ? (
            <BsSun className="text-base md:text-xl" />
          ) : (
            <MdOutlineDarkMode className="text-base md:text-xl" />
          )}
          {theme === "dark" ? "Light " : "Dark "} Mode
        </span>
      </nav>
    </header>
  );
};

export default Header;
