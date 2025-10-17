export default function Card(content) {
  const { img, title, text } = content;
  return (
    <div className="card">
      <div className="card-img h-[200px] w-full">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="card-body p-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
