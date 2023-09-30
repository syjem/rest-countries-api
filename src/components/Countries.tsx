import useSWR from "swr";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import useTheme from "@/context/useTheme";
import CountriesData from "./CountriesData";
import { useCountries } from "../context/useCountries";
import CountriesDataSkeleton from "./ui/CountriesDataSkeleton";

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
  const { theme } = useTheme();

  const textColor = theme == "dark" ? "text-white" : "dark-blue-bg";

  const fetchUrl = (() => {
    if (url === "all") {
      return "https://restcountries.com/v3.1/all";
    } else if (url === "region") {
      return `https://restcountries.com/v3.1/region/${region}`;
    } else if (url === "name") {
      return `https://restcountries.com/v3.1/name/${searchCountry}`;
    }
  })();

  const { data, error, isLoading } = useSWR(fetchUrl, async (url) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`An error has occurred!`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  });

  useEffect(() => {
    if (region !== "Filter by Region") {
      setUrl("region");
    } else if (searchCountry.trim() === "") {
      setUrl("all");
    } else {
      setUrl("name");
    }
  }, [region, searchCountry, setUrl]);

  if (error) {
    return (
      <h2
        className={`${textColor} mx-auto text-xl`}
      >{`No result for ${searchCountry}!`}</h2>
    );
  }

  if (isLoading) {
    return (
      <>
        <CountriesDataSkeleton />
        <CountriesDataSkeleton />
        <CountriesDataSkeleton />
        <CountriesDataSkeleton />
      </>
    );
  }

  return (
    <React.Fragment>
      {data.map((item: Country) => (
        <Link
          to={`/${item.name.common.toLowerCase().replace(/ /g, "-")}`}
          key={item.name.common}
        >
          <CountriesData item={item} />
        </Link>
      ))}
    </React.Fragment>
  );
};

export default Countries;
