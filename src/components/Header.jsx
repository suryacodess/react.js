export default function Header() {
  return (
    <header className="header w-full">
      <div className="header-inner max-w-[1200px] w-full mx-auto flex justify-between items-center p-2">
        <div className="header-logo">
          <h2 className="text-2xl font-extrabold">Header</h2>
        </div>
        <nav className="header-nav">
          <div className="header-nav-list flex gap-4 justify-center items-center">
            {["Home", "About", "Contact"].map((item, index) => {
              return (
                <div className="header-nav-list-item" key={index}>
                  {item}
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
