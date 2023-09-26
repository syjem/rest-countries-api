import useTheme from "../context/useTheme";
import formatPopulation from "../Formatter";
import React, { useEffect, useState } from "react";
import { useCountries } from "../context/useCountries";

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
  const { url, setUrl, region, searchCountry } = useCountries();
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [fetchUrl, setFetchUrl] = useState<string>(
    "https://restcountries.com/v3.1/all"
  );

  useEffect(() => {
    async function getCountry() {
      if (url === "name") {
        setFetchUrl(`https://restcountries.com/v3.1/name/${searchCountry}`);
      } else if (url === "region") {
        setFetchUrl(`https://restcountries.com/v3.1/region/${region}`);
      } else if (url === "all") {
        setFetchUrl("https://restcountries.com/v3.1/all");
      }

      try {
        const response = await fetch(fetchUrl);

        if (!response.ok) {
          throw new Error(`No result for ${searchCountry}!`);
        }

        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
        setError(`${error}`);
      }
    }

    getCountry();
  }, [fetchUrl, url, setUrl, region, searchCountry]);

  const bg = theme == "dark" ? "bg-dark-blue" : "bg-slate-100";
  const textColor = theme == "dark" ? "text-white" : "dark-blue-bg";

  return (
    <React.Fragment>
      {countries ? (
        countries.map((item, index) => (
          <div
            key={index}
            className={`${bg} ${textColor} w-full max-w-[400px] mx-auto cursor-pointer rounded-sm overflow-hidden`}
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
        ))
      ) : (
        <h2 className="text-white text-xl">{error}</h2>
      )}
    </React.Fragment>
  );
};

export default Countries;
