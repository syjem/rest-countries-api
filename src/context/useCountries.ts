import { useContext } from "react";
import { CountriesContext } from "./CountriesContext";

export const useCountries = () => {
    return useContext(CountriesContext);
  };