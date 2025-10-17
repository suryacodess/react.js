import { useGSAP } from "@gsap/react";
import { Draggable, InertiaPlugin } from "gsap/all";
import UserCard from "./UserCard";
import { arcane, blankpink } from "../data/data";
import gsap from "gsap";
gsap.registerPlugin(Draggable, InertiaPlugin);




export default function Users() {
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
  return (
    <section className="users py-10 bg-gray-200 min-h-screen px-4">
      <div className="users-inner max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {arcane.map((item, index) => {
          return <UserCard {...item} key={index} />;
        })}
      </div>
    </section>
  );
}
