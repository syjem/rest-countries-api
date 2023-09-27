import Header from "./Header";
import Country from "./Country";
import useTheme from "../context/useTheme";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const EachCountry = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { countryName } = useParams();
  const [error, setError] = useState<unknown>();
  const [countryData, setCountryData] = useState(null);

  const previousRoutes = () => {
    navigate(-1);
  };

  const bg = theme == "dark" ? "bg-dark-blue-bg" : "bg-slate-200";
  const bgBtn = theme == "dark" ? "bg-dark-blue" : "bg-slate-100";
  const textColor = theme == "dark" ? "text-white" : "dark-blue-bg";
  const url = countryName ? countryName.replace(/-/g, " ") : "";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${url}`
        );

        if (!response.ok) {
          throw new Error(`No result for ${url.toUpperCase()}!`);
        }
        const data = await response.json();
        setCountryData(data[0]);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, [countryName, url]);

  return (
    <>
      <Header />
      <main className={`${bg} px-6 pt-10 md:pt-14 md:px-14 min-h-[100vh]`}>
        <div className="max-container w-full">
          <button
            onClick={previousRoutes}
            className={`${bgBtn} ${textColor} custom-shadow p-1 px-3 flex items-center gap-3 rounded-base`}
          >
            <BsArrowLeft className="text-xl" />
            Back
          </button>
        </div>
        <section
          className={`${textColor} text-center text-xl max-container w-full pb-20 mt-12 grid gap-10 grid-cols-auto`}
        >
          {countryData ? <Country item={countryData} /> : `${error}`}
        </section>
      </main>
    </>
  );
};

export default EachCountry;
