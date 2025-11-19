import { useAppContext } from "../context/Context";
import { useGSAP } from "@gsap/react";
import { Draggable, InertiaPlugin } from "gsap/all";
import UserCard from "./UserCard";
import { arcane, blankpink } from "../data/data";
import gsap from "gsap";
import { useEffect, useState } from "react";
gsap.registerPlugin(Draggable, InertiaPlugin);
export default function Users() {
  const { searchInput, selectedCharacterFilterFromDropdown } = useAppContext();
  let allUsers = [...arcane, ...blankpink];
  const [searchFilteredUsers, setSearchFilteredUsers] = useState(blankpink);

  // onload animation
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width:1024px)", () => {
      Draggable.create(".user-card", {
        bounds: ".users-inner",
        inertia: true,
      });
    });

    const usersTimeline = gsap.timeline();

    usersTimeline.fromTo(
      ".user-card",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        stagger: 0.2,
      }
    );
  });

  useEffect(() => {
    let filteredUsers = allUsers;
    if (searchInput.trim() !== "") {
      filteredUsers = filteredUsers.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    if (selectedCharacterFilterFromDropdown !== "all") {
      filteredUsers = filteredUsers.filter(
        (item) =>
          item.category.toLowerCase() === selectedCharacterFilterFromDropdown
      );
    }
    setSearchFilteredUsers(filteredUsers);
  }, [searchInput, selectedCharacterFilterFromDropdown]);

  return (
    <section
      className={`users py-0 bg-gray-200 px-4 pb-10 ${
        searchFilteredUsers.length > 4 ? "min-h-screen" : ""
      }`}
    >
      {searchFilteredUsers.length > 0 ? (
        <div className="users-inner max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {searchFilteredUsers.map((item, index) => {
            return <UserCard {...item} key={index} />;
          })}
        </div>
      ) : (
        <div className="text-center text-3xl">Character not found!</div>
      )}
    </section>
  );
}
