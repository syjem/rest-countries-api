import useTheme from "../context/useTheme";
import formatPopulation from "../Formatter";
import React, { useEffect, useState } from "react";

interface Country {
  region: string;
  capital: string;
  population: string;
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
}

const Countries = () => {
  const { theme } = useTheme();
  const [value] = useState("all");
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    async function getCountry() {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/${value}`);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    }

    getCountry();
  }, [value]);

  const bg = theme == "dark" ? "bg-dark-blue" : "bg-slate-100";
  const textColor = theme == "dark" ? "text-white" : "dark-blue-bg";

  return (
    <React.Fragment>
      {countries.map((item, index) => (
        <div
          key={index}
          className={`${bg} ${textColor} w-full max-w-250 mx-auto cursor-pointer rounded-sm overflow-hidden`}
        >
          <div className="w-full h-40">
            <img src={item.flags.png} alt="" className="w-full h-full" />
          </div>

          <div className="w-full p-4 pb-8">
            <h5 className="text-base md:text-lg font-800 leading-10">
              {item.name.common}
            </h5>
            <p className="font-600 leading-8">
              Population:{" "}
              <span className="font-300">
                {formatPopulation(item.population)}
              </span>
            </p>
            <p className="font-600 leading-8">
              Region: <span className="font-300">{item.region}</span>
            </p>
            <p className="font-600 leading-8">
              Capital: <span className="font-300">{item.capital}</span>
            </p>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Countries;
