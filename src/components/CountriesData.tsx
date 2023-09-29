import useTheme from "../context/useTheme";
import formatPopulation from "../formatPopulation";

type CountriesDataProps = {
  item: {
    region: string;
    capital: string;
    population: string;
    flags: {
      png: string;
    };
    name: {
      common: string;
    };
  };
};

const CountriesData = ({ item }: CountriesDataProps) => {
  const { theme } = useTheme();

  const bg = theme == "dark" ? "bg-dark-blue" : "bg-slate-100";
  const textColor = theme == "dark" ? "text-white" : "dark-blue-bg";
  return (
    <div
      className={`${bg} ${textColor} w-full max-w-[400px] mx-auto rounded-sm overflow-hidden shadow-md`}
    >
      <div className="w-full h-40">
        <img
          src={item.flags.png}
          alt={`${item.name.common}'s flag`}
          className="w-full h-full"
        />
      </div>

      <div className="w-full p-4 pb-8">
        <h5 className="py-4 text-base md:text-lg font-800 leading-10">
          {item.name.common}
        </h5>
        <p className="font-600 leading-8">
          Population:{" "}
          <span className="font-300">
            {item.population ? formatPopulation(item.population) : "N/A"}
          </span>
        </p>
        <p className="font-600 leading-8">
          Region:{" "}
          <span className="font-300">{item.region ? item.region : "N/A"}</span>
        </p>
        <p className="font-600 leading-8">
          Capital:{" "}
          <span className="font-300">
            {item.capital ? item.capital : "N/A"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CountriesData;
