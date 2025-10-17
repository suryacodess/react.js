import { IoIosCheckmark, IoMdAdd } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { FcMms } from "react-icons/fc";
export default function UserCard({ img, title, text}) {
  let likes = Math.floor(Math.random() * (900 - 200 + 1)) + 400;
  let comments = Math.floor(Math.random() * (900 - 200 + 1)) + 100;
  return (
    <div className="user-card p-1.5 rounded-4xl bg-white cursor-pointer">
      <div className="user-card-img aspect-square w-full rounded-4xl overflow-hidden">
        <img
          className="w-full h-full object-cover object-top"
          src={img}
          alt={title}
        />
      </div>
      <div className="user-card-body px-4 py-4 flex flex-col justify-between min-h-[177px] gap-2 poppins">
        <div className="user-card-body-top flex gap-2 flex-col">
          <div className="user-card-body-top-title flex gap-1 items-center justify-start">
            <h4 className="text-[18px] font-medium">{title}</h4>
            <div className="w-[15px] h-[15px] rounded-full flex justify-center items-center bg-purple-700">
              <IoIosCheckmark color="white" fontWeight="900" />
            </div>
          </div>
          <div className="user-card-body-top-text">
            <p className="text-[14px] text-gray-400 font-normal">
              {text && text.slice(0, 80)}
            </p>
          </div>
        </div>
        <div className="user-card-body-bottom flex flex-row justify-between items-center pt-5">
          <div className="user-card-body-bottom-icons flex flex-row gap-2">
            <div className="flex justify-center items-center gap-1">
              <FcLike cursor={"pointer"} />
              <span className="text-[12px] font-medium">{likes}</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <FcMms cursor={"pointer"} />
              <span className="text-[12px] font-medium">{comments}</span>
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
