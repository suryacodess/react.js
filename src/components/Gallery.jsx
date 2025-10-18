import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
import gsap from "gsap";

export default function Gallery(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  console.log(props.sc);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://picsum.photos/v2/list?page=${page}`
        );
        if (!response.ok) throw new Error("Something went wrong");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log("Fetch failed", error);
      }
    };
    getData();
  }, [page]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".gallery-item .gallery-card img",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        stagger: 0.2,
      }
    );
  }, [data, page]);

  const pages = (str) => {
    if (str === "prev") {
      if (page > 1) setPage((prev) => prev - 1);
    } else if (str === "next") {
      setPage((prev) => prev + 1);
    }

    props.sc.scrollTo(".gallery");
  };

  return (
    <div className="gallery w-full py-10 bg-gray-200 min-h-dvh">
      <div className="flex justify-end items-center max-w-[1200px] mx-auto pb-5 px-3">
        <div className="">Your at page:{page}</div>
      </div>
      {data.length > 0 ? (
        <div className="gallery-inner max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((item) => {
            return (
              <div className="gallery-item" key={item.id}>
                <GalleryCard {...item} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold">Loading...</h1>
        </div>
      )}

      {data.length > 0 ? (
        <div className="text-center py-5 gallery-item flex gap-2 justify-center">
          <button
            className="px-4 text-[12px] font-medium py-2 bg-purple-500 cursor-pointer rounded-[4px]"
            onClick={() => pages("prev")}
            style={
              page == 1 ? { cursor: "not-allowed" } : { cursor: "pointer" }
            }
          >
            Previous
          </button>
          <button
            className="px-4 text-[12px] font-medium py-2 bg-purple-500 cursor-pointer rounded-[4px]"
            onClick={() => pages("next")}
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}
