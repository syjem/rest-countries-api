import Borders from "./CountryBorders";
import useTheme from "../context/useTheme";
import formatPopulation from "../formatPopulation";

type CountryProps = {
  item: {
    tld: string;
    region: string;
    capital: string;
    borders: string[];
    subregion: string;
    languages: string;
    population: string;
    flags: {
      png: string;
    };
    name: {
      common: string;
      nativeName: {
        index: {
          common: string;
        };
      };
    };
    currencies: {
      index: {
        name: string;
      };
    };
  };
};

const Country = ({ item }: CountryProps) => {
  const { theme } = useTheme();
  const textColor = theme == "dark" ? "text-white" : "dark-blue-bg";

  return (
    <div
      className={`${textColor} text-left flex flex-col lg:flex-row w-full lg:h-[100%] mx-auto rounded-sm overflow-hidden gap-6 lg:gap-24`}
    >
      <div className="w-full max-w-[450px] max-h-[90%]">
        <img
          src={item.flags.png}
          alt={`${item.name.common}'s flag`}
          className="w-full h-full"
        />
      </div>

      <div className="w-full flex flex-col gap-6 lg:pt-10 pb-4">
        <h5 className="text-base md:text-xl font-800 leading-10">
          {item.name.common}
        </h5>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 text-base">
            <p className="font-600 leading-8">
              Native Name:{" "}
              <span className="font-300">
                {item.name.nativeName
                  ? Object.values(item.name.nativeName)[0].common
                  : "N/A"}
              </span>
            </p>
            <p className="font-600 leading-8">
              Population:{" "}
              <span className="font-300">
                {item.population ? formatPopulation(item.population) : "N/A"}
              </span>
            </p>
            <p className="font-600 leading-8">
              Region:{" "}
              <span className="font-300">
                {item.region ? item.region : "N/A"}
              </span>
            </p>
            <p className="font-600 leading-8">
              Sub Region:{" "}
              <span className="font-300">
                {item.subregion ? item.subregion : "N/A"}
              </span>
            </p>
            <p className="font-600 leading-8">
              Capital:{" "}
              <span className="font-300">
                {item.capital ? item.capital : "N/A"}
              </span>
            </p>
          </div>
          <div className="flex-1 text-base">
            <p className="font-600 leading-8">
              Top Level Domain:{" "}
              <span className="font-300">{item.tld ? item.tld[0] : "N/A"}</span>
            </p>
            <p className="font-600 leading-8">
              Currencies:{" "}
              <span className="font-300">
                {item.currencies
                  ? Object.values(item.currencies)[0].name
                  : "N/A"}
              </span>
            </p>
            <p className="font-600 leading-8">
              Languages:{" "}
              {item.languages
                ? Object.values(item.languages).map((name, index) => (
                    <span className="font-300" key={index}>
                      {name}
                      {index < Object.keys(item.languages).length - 1
                        ? ", "
                        : ""}
                    </span>
                  ))
                : "N/A"}
            </p>
          </div>
        </div>
        <Borders borders={item.borders} />
      </div>
    </div>
  );
};

export default Country;
