import { Link } from "react-router-dom";
import CountriesData from "./CountriesData";
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
  const { url, setUrl, region, searchCountry } = useCountries();
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [fetchUrl, setFetchUrl] = useState<string>(
    "https://restcountries.com/v3.1/all"
  );

  useEffect(() => {
    async function fetchData(url: string) {
      try {
        const response = await fetch(url);

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

    if (url === "name") {
      setFetchUrl(`https://restcountries.com/v3.1/name/${searchCountry}`);
    } else if (url === "region") {
      setFetchUrl(`https://restcountries.com/v3.1/region/${region}`);
    } else if (url === "all") {
      setFetchUrl("https://restcountries.com/v3.1/all");
    }

    fetchData(fetchUrl);
  }, [fetchUrl, url, setUrl, region, searchCountry]);

  return (
    <React.Fragment>
      {countries ? (
        countries.map((item, index) => (
          <Link
            to={`/${item.name.common.toLowerCase().replace(/ /g, "-")}`}
            key={index}
          >
            <CountriesData item={item} />
          </Link>
        ))
      ) : (
        <h2 className="text-white text-xl">{error}</h2>
      )}
    </React.Fragment>
  );
};

export default Countries;
