import { useGSAP } from "@gsap/react";
import { Draggable, InertiaPlugin } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(Draggable, InertiaPlugin);
import UserCard from "./UserCard";
const users = [
  {
    id: 1,
    img: "https://i.namu.wiki/i/fjnLZhByeJypmPtNpoH0W6BnJFw7l3AyZVH9LdhsQOdJWZS5jDSOCaE37ochEp4rvje_IgOfP1A36aMwcNvZcg.webp",
    title: "Rose",
    text: "A Star",
  },
  {
    id: 8,
    img: "https://nolae.eu/cdn/shop/articles/jennie-blackpink-profil-646657.jpg?v=1732634830&width=1200",
    title: "Jenni",
    text: "Product Designer who focuses on simplicity & usability.",
  },
  {
    id: 1,
    img: "https://media.allure.com/photos/5f8dac2d2689023f4ca7091a/1:1/w_2333,h_2333,c_limit/lisa%20blackpink%20mac%20campaign.jpg",
    title: "Lisa",
    text: "A Star",
  },
  {
    id: 6,
    img: "https://www.billboard.com/wp-content/uploads/2025/01/jisoo-tommy-hilfiger-fashion-2024-billboard-1548.jpg?w=942&h=628&crop=1",
    title: "Jisoo",
    text: "A Star",
  },
  {
    id: 2,
    img: "https://4kwallpapers.com/images/wallpapers/lisa-blackpink-k-pop-singer-beautiful-peach-background-2048x2048-5391.jpeg",
    title: "Lisa Twin",
    text: "A Star",
  },
  {
    id: 4,
    img: "https://pbs.twimg.com/media/FtvylJraQAEyNQ2.jpg",
    title: "Rose",
    text: "A Star",
  },

  {
    id: 8,
    img: "https://wwd.com/wp-content/uploads/2021/03/DIOR_JISOO_AMBASSADOR_ed.jpg",
    title: "Jisoo",
    text: "Product Designer who focuses on simplicity & usability.",
  },

  {
    id: 8,
    img: "https://www.hindustantimes.com/ht-img/img/2023/07/15/1600x900/jennie_1689410686831_1689410687014.jpg",
    title: "Jenni",
    text: "Product Designer who focuses on simplicity & usability.",
  },
  {
    id: 4,
    img: "https://cdn.shopify.com/s/files/1/0469/3927/5428/files/Bildschirmfoto_2024-11-22_um_11.58.02.png?v=1732273097",
    title: "Rose",
    text: "A Star",
  },
  {
    id: 23,
    img: "https://asianwiki.com/images/f/f7/Kim_Ji-Soo_%28Blackpink%29-P1.jpg",
    title: "Jisso",
    text: "A Star",
  },
  {
    id: 4,
    img: "https://scontent.cdninstagram.com/v/t51.75761-15/504468230_18343681972233629_5725387116030804613_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=111&ig_cache_key=MzY1NDA2NTIwNzg0MzkxMDk1NQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMS5zZHIuQzMifQ%3D%3D&_nc_ohc=jgTLOi2IZ2sQ7kNvwGy4f7W&_nc_oc=AdkwyOFmlJnIh3x4PC57etvdS_u2cCfP2ThIpP6mnATNeva7NDaYV3XaX3kwyO_yBkSMv6IYwODQtI2s71Myu0Dv&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=U_TfUQSxgkbmiOblBKfHZQ&oh=00_AfcpRSabTeJryzLBfwWCvtv-F31be10tDSJWXGbQMikw0Q&oe=68F7E7E7",
    title: "Jenni",
    text: "Product Designer who focuses on simplicity & usability.",
  },

  {
    id: 0,
    img: "https://i.pinimg.com/736x/97/c3/4d/97c34df42deeed65b13cf3ced0903cae.jpg",
    title: "Lisa",
    text: "Product Designer who focuses on simplicity & usability.",
  },
  {
    id: 4,
    img: "https://people.com/thmb/PBtgaJzwjcI9Gav1E7neELUh5qY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(723x419:725x421)/Rose-Blackpink-Tout-1725-a30fb15aecbe41da83ed5d49373ee522.jpg",
    title: "Rose",
    text: "A Star",
  },
  {
    id: 2,
    img: "https://4kwallpapers.com/images/wallpapers/lisa-blackpink-k-pop-singer-korean-singers-2560x2560-6491.jpg",
    title: "Lisa",
    text: "A Star",
  },
];

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
        {users.map((item, index) => {
          return <UserCard {...item} key={index} />;
        })}
      </div>
    </section>
  );
}
