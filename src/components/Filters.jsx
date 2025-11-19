import { useEffect, useState } from "react";
import { useAppContext } from "../context/Context";
import { arcane, blankpink } from "../data/data";
export default function Filters() {
  const {
    searchInput,
    setSearchInput,
    setSelectedCharacterFilterFromDropdown,
  } = useAppContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("k");
    let news = [...arcane, ...blankpink];
    setData(news);
  }, []);

  const openDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectedCharacterInDropdown = (e) => {
    setSelectedCharacterFilterFromDropdown(e.target.dataset.title)
  };

  return (
    <section className="filters-section bg-gray-200 py-10 px-4">
      <div className="max-w-[1200px] flex justify-between w-full m-auto">
        <div className="searchbar max-w-full lg:max-w-[300px] w-full">
          <input
            type="text"
            placeholder="Search character"
            className="w-full px-4 outline-0 rounded-4xl py-2 border-2 border-purple-700"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        <div className="dropdown-filter">
          <div
            className="border-2 border-purple-700 px-10 cursor-pointer rounded-4xl py-2 relative"
            onClick={() => openDropdown()}
          >
            <div className="">Character</div>
            {dropdownOpen && (
              <div
                className="dropdown absolute top-[100%] left-0 flex flex-col gap-4 p-2 bg-purple-700 w-full z-[1] max-h-[300px] overflow-auto"
                style={{ scrollbarWidth: "thin" }}
              >
                {data?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="dropdown-item text-white"
                      data-title={item.title.toLowerCase()}
                      onClick={(e) => selectedCharacterInDropdown(e)}
                    >
                      {item.title}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
