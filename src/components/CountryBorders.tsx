import useSWR from "swr";
import React from "react";
import useTheme from "../context/useTheme";
import { Skeleton } from "@/components/ui/skeleton";

type CountryProps = {
  countryCode: string;
};

export const CountryCode = ({ countryCode }: CountryProps) => {
  const { theme } = useTheme();
  const bg = theme == "dark" ? "bg-dark-blue" : "bg-slate-100";

  const { data, error, isLoading } = useSWR(
    `https://restcountries.com/v3.1/alpha/${countryCode}`,
    async (url) => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`No result for ${countryCode}!`);
        }

        const data = await response.json();

        if (data.length > 0 && data[0].name) {
          return data[0].name.common;
        } else {
          throw new Error("Data not available");
        }
      } catch (error) {
        throw new Error(`${error}`);
      }
    }
  );

  if (error) {
    return "";
  }

  if (isLoading) return <Skeleton className="h-8 w-[70px] rounded-sm ml-2" />;

  return (
    <span
      className={`${bg} font-300 custom-shadow px-3 mr-2 rounded-sm first-of-type:ml-1`}
    >
      {data}
    </span>
  );
};

type BordersProps = {
  borders: string[];
};

const Borders = ({ borders }: BordersProps) => {
  return (
    <div className="font-600 leading-8 text-base flex flex-wrap gap-y-2 items-center">
      Border Countries:{" "}
      {borders ? (
        borders.map((border) => (
          <React.Fragment key={border}>
            <CountryCode countryCode={border} />
          </React.Fragment>
        ))
      ) : (
        <span className="font-300 ml-1">N/A</span>
      )}
    </div>
  );
};

export default Borders;
