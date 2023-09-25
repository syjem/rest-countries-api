import Header from "./components/Header";
import Search from "./components/Search";
import useTheme from "./context/useTheme";
import Countries from "./components/Countries";
import FilterRegion from "./components/FilterRegion";

function App() {
  const { theme } = useTheme();

  const bg = theme == "dark" ? "bg-dark-blue-bg" : "bg-slate-200";
  return (
    <>
      <Header />
      <main className={`${bg} px-6 pt-10 md:pt-14 md:px-14`}>
        <section className="max-container w-full flex justify-between flex-col md:flex-row items-start gap-2">
          <Search />
          <FilterRegion />
        </section>
        <section className="max-container w-full  mt-12 grid gap-10 grid-cols-auto pb-20">
          <Countries />
        </section>
      </main>
    </>
  );
}

export default App;
