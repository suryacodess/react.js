import { useEffect, useRef, useState } from "react";
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
  const dropdownTitle = useRef();

  useEffect(() => {
    let data = [...arcane, ...blankpink];
    let uniqueData = data.filter(
      (item, index, arr) =>
        index === arr.findIndex((obj) => obj.category === item.category)
    );
    setData(uniqueData);
  }, []);

  const openDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectedCharacterInDropdown = (e) => {
    setSelectedCharacterFilterFromDropdown(e.target.dataset.category);
    dropdownTitle.current.innerText = e.target.dataset.category;
  };

  return (
    <section className="filters-section bg-gray-200 py-10 px-4">
      <div className="max-w-[1200px] flex flex-col md:flex-row justify-between w-full m-auto">
        <div className="searchbar max-w-full lg:max-w-[300px] w-full mb-4 md:mb-0">
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
            className={`min-w-[180px] border-2 border-purple-700 px-10 cursor-pointer rounded-4xl py-2 relative ${
              dropdownOpen
                ? "rounded-bl-[0] rounded-tl-2xl rounded-tr-2xl rounded-br-[0]"
                : ""
            }`}
            onClick={() => openDropdown()}
          >
            <div ref={dropdownTitle} className="text-center capitalize">
              Character
            </div>
            {dropdownOpen && (
              <div
                className="w-full dropdown absolute top-[100%] left-0 flex flex-col gap-4 p-2 bg-purple-700 z-[1] max-h-[300px] overflow-auto border-2 border-purple-700"
                style={{ scrollbarWidth: "thin" }}
              >
                {" "}
                <div
                  className="dropdown-item text-white"
                  data-category="all"
                  onClick={(e) => selectedCharacterInDropdown(e)}
                >
                  All
                </div>
                {data?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="dropdown-item text-white capitalize"
                      data-category={item.category.toLowerCase()}
                      onClick={(e) => selectedCharacterInDropdown(e)}
                    >
                      {item.category}
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
