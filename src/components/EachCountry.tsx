import useSWR from "swr";
import Header from "./Header";
import Country from "./Country";
import { Skeleton } from "./ui/skeleton";
import useTheme from "../context/useTheme";
import { useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import formatCountryName from "@/formatCountryName";

const EachCountry = () => {
  const { theme } = useTheme();
  const bg = theme == "dark" ? "bg-dark-blue-bg" : "bg-slate-200";
  const bgBtn = theme == "dark" ? "bg-dark-blue" : "bg-slate-100";
  const textColor = theme == "dark" ? "text-white" : "dark-blue-bg";

  const navigate = useNavigate();
  const previousRoutes = () => {
    navigate(-1);
  };

  const { countryName } = useParams();
  const url = formatCountryName(countryName);

  const { data, error, isLoading } = useSWR(
    `https://restcountries.com/v3.1/name/${url}`,
    async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`No result for ${url}!`);
        }
        const data = await response.json();
        return data[0];
      } catch (error) {
        throw new Error(`${error}`);
      }
    }
  );

  return (
    <>
      <Header />
      <main
        className={`${bg} px-6 pt-10 md:pt-14 md:px-14 min-h-[100vh] relative`}
      >
        <div className="max-container w-full">
          <button
            onClick={previousRoutes}
            className={`${bgBtn} ${textColor} custom-shadow p-1 px-3 flex items-center gap-3 rounded-base`}
          >
            <BsArrowLeft className="text-xl" />
            Back
          </button>
        </div>
        {isLoading ? (
          <Skeleton className="absolute top-[30%] left-[20%] w-[60%] h-8 rounded-md" />
        ) : (
          <section
            className={`${textColor} text-center text-xl max-container w-full pb-20 mt-12 grid gap-10 grid-cols-auto`}
          >
            {data ? <Country item={data} /> : `${error}`}
          </section>
        )}
      </main>
    </>
  );
};

export default EachCountry;
