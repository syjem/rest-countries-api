import { useState } from "react";
import { BsSun } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
// import { Link } from "react-router-dom";

const Header = () => {
  const [light, setLight] = useState(true);
  return (
    <header className="bg-dark-blue w-full px-6 py-8 md:px-14">
      <nav className="flex justify-between items-center max-container transition-all">
        <a href="/" className="text-white text-base md:text-xl font-600">
          Where in the world?
        </a>
        <span
          className="flex items-center gap-2 text-white text-base md:text-lg py-1 cursor-pointer"
          onClick={() => setLight(!light)}
        >
          {light ? (
            <BsSun className="text-base md:text-xl" />
          ) : (
            <MdOutlineDarkMode className="text-base md:text-xl" />
          )}
          {light ? "Light " : "Dark "} Mode
        </span>
      </nav>
    </header>
  );
};

export default Header;
