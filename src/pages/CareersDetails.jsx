import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function CareersDetails() {
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState(8);
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchApi = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        );
        if (!fetchApi.ok) throw new Error("Something went wrong");
        const response = await fetchApi.json();
        setData(response);
      } catch (error) {
        console.log("Fetch failed", error);
        setData([]);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <div className="pt-5">
        <h2 className="text-2xl font-bold poppins">UseEffect</h2>
        {data.length > 0 ? (
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 pt-4">
              {data.slice(0, dataCount).map((item, index) => {
                return (
                  <Link
                    to={`/careers/careers-details/${item.id}`}
                    className="bg-purple-500 p-5 rounded-2xl"
                    key={item.id}
                  >
                    <h2>{item.id}</h2>
                    <h2>{item.title}</h2>
                  </Link>
                );
              })}
            </div>
            <div className="text-center pt-4">
              <button
                className="px-4 py-2 bg-purple-700 text-white rounded-[4px] cursor-pointer"
                onClick={() => {
                  dataCount < data.length && setDataCount((prev) => prev + 20);
                }}
                style={
                  dataCount >= data.length
                    ? { cursor: "not-allowed" }
                    : { cursor: "pointer" }
                }
              >
                Load more
              </button>
            </div>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
}

export default CareersDetails;
