import { IoIosCheckmark, IoMdAdd } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { FcMms } from "react-icons/fc";
export default function GalleryCard({ id, download_url, author }) {
  let likes = Math.floor(Math.random() * (900 - 200 + 1)) + 400;
  let comments = Math.floor(Math.random() * (900 - 200 + 1)) + 100;
  return (
    <div className="gallery-card p-1.5 rounded-4xl bg-white cursor-pointer">
      <div className="gallery-card-img aspect-square w-full rounded-4xl overflow-hidden">
        <img
          className="w-full h-full object-cover object-top"
          src={`https://picsum.photos/id/${id}/400/300`}
          alt={author}
          loading="lazy"
        />
      </div>
      <div className="gallery-card-body px-4 py-4 flex flex-col justify-between min-h-[177px] gap-2 poppins">
        <div className="gallery-card-body-top flex gap-2 flex-col">
          <div className="gallery-card-body-top-title flex gap-1 items-center justify-start">
            <h4 className="text-[18px] font-medium">{author}</h4>
            <div className="w-[15px] h-[15px] rounded-full flex justify-center items-center bg-purple-700">
              <IoIosCheckmark color="white" fontWeight="900" />
            </div>
          </div>
        </div>
        <div className="gallery-card-body-bottom flex flex-row justify-between items-center pt-5">
          <div className="gallery-card-body-bottom-icons flex flex-row gap-2">
            <div className="flex justify-center items-center gap-1">
              <FcLike cursor={"pointer"} />
              {/* <span className="text-[12px] font-medium">{likes}</span> */}
            </div>
            <div className="flex justify-center items-center gap-1">
              <FcMms cursor={"pointer"} />
              {/* <span className="text-[12px] font-medium">{comments}</span> */}
            </div>
          </div>
          <div className="follow flex bg-purple-500 px-4 py-2 items-center gap-1 rounded-full text-white text-[16px] font-medium cursor-pointer">
            <span>Follow</span>
            <IoMdAdd />
          </div>
        </div>
      </div>
    </div>
  );
}
