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

const initialContextValue: CountriesContextType = {
  url: "all",
  setUrl: () => {},
  searchCountry: "",
  showFilter: false,
  handleChange: () => {},
  region: "Filter by Region",
  handleShowFilter: () => {},
  handleChangeFilter: () => {},
};

export const CountriesContext =
  createContext<CountriesContextType>(initialContextValue);

type CountriesContextProps = {
  children: React.ReactNode;
};

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
    const inputValue = e.target.value;

    if (inputValue.trim() === "") {
      setUrl("all");
    } else {
      setUrl("name");
    }

    setRegion(regionInitial);
    setSearchCountry(inputValue);
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
