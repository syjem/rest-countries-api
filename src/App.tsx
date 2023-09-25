import Countries from "./components/Countries";
import FilterRegion from "./components/FilterRegion";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Header />
      <main className="px-6 mt-10 md:mt-14 md:px-14">
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
