import { createContext, useState } from "react";

type CountriesContextType = {
  url: string;
  region: string;
  showFilter: boolean;
  searchCountry: string;
  handleShowFilter: () => void;
  handleChangeFilter: (filter: string) => void;
  setUrl: React.Dispatch<React.SetStateAction<URLType>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CountriesContext = createContext<CountriesContextType>("");

type CountriesContextProps = {
  children: React.ReactNode;
};

// type URLType = `https://restcountries.com/v3.1/all`;

type URLType = "all" | "name" | "region";

const regionInitial = "Filter by Region";

const CountriesContextProvider = ({ children }: CountriesContextProps) => {
  const [url, setUrl] = useState<URLType>("all");
  const [showFilter, setShowFilter] = useState(false);
  const [searchCountry, setSearchCountry] = useState("");
  const [region, setRegion] = useState(regionInitial);

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleChangeFilter = (filter: string) => {
    setRegion(filter);
    setUrl("region");
    setSearchCountry("");
    setShowFilter(!showFilter);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl("name");
    setRegion(regionInitial);
    setSearchCountry(e.target.value);
  };

  return (
    <CountriesContext.Provider
      value={{
        url,
        region,
        setUrl,
        showFilter,
        handleChange,
        searchCountry,
        handleShowFilter,
        handleChangeFilter,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContextProvider;
