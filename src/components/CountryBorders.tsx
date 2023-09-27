import useTheme from "../context/useTheme";
import React, { useEffect, useState } from "react";

type CountryProps = {
  countryCode: string;
};

export const CountryCode = ({ countryCode }: CountryProps) => {
  const { theme } = useTheme();
  const [countryName, setCountryName] = useState("");

  const bg = theme == "dark" ? "bg-dark-blue" : "bg-slate-100";

  useEffect(() => {
    async function fetchCountryName() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryCode}`
        );

        if (!response.ok) {
          throw new Error(`No result for ${countryCode}!`);
        }

        const data = await response.json();
        console.log(data);

        if (data.length > 0 && data[0].name) {
          setCountryName(data[0].name.common);
        }
      } catch (error) {
        console.log(error);
        setCountryName("Error");
      }
    }

    fetchCountryName();
  }, [countryCode]);

  return (
    <span
      className={`${bg} font-300 custom-shadow py-1 px-4 mr-2 rounded-sm first-of-type:ml-1`}
    >
      {countryName}{" "}
    </span>
  );
};

type BordersProps = {
  borders: string[];
};

const Borders = ({ borders }: BordersProps) => {
  return (
    <p className="font-600 leading-8 text-base inline-block">
      Border Countries:{" "}
      {borders ? (
        borders.map((border) => (
          <React.Fragment key={border}>
            <CountryCode countryCode={border} />
          </React.Fragment>
        ))
      ) : (
        <span className="font-300">N/A</span>
      )}
    </p>
  );
};

export default Borders;
