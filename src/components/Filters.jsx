import { useAppContext } from "../context/Context";
export default function Filters() {
  const { searchInput, setSearchInput } = useAppContext();

  return (
    <section className="filters-section bg-gray-200 py-10">
      <div className="max-w-[1200px] w-full m-auto px-2">
        <div className="searchbar-filter max-w-[300px] w-full">
          <input
            type="text"
            placeholder="Search character"
            className="w-full px-4 outline-0 rounded-4xl py-2 border-2 border-purple-700"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
