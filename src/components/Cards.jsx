import Card from "./Card";

const content = [
  {
    id: 0,
    img: "https://plus.unsplash.com/premium_photo-1679769911694-a33283f24975?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlJTIwbW9kYWxzJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    title: "Surya Prakash",
    text: "Frontend developer",
  },
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1694636941182-9e9fd8b3edb5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1303",
    title: "Prakash",
    text: "Backend developer",
  },
];

export default function Cards() {
  return (
    <section className="w-full py-10">
      <div className="cards max-w-[1200px] mx-auto grid grid-cols-4 gap-4 p-2">
        {content.map((item, index) => {
          return <Card {...item} key={index}/>;
        })}
      </div>
    </section>
  );
}
