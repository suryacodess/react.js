import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    theme == "" ? setTheme("black") : setTheme("");
  };
  console.log(theme);
  return (
    <header
      className={`header w-full `}
      style={{
        backgroundColor: theme ? theme : "white",
        color: theme ? "white" : theme,
      }}
    >
      <div className="header-inner max-w-[1200px] w-full mx-auto flex justify-between items-center p-2">
        <div className="header-logo">
          <h2 className="text-2xl font-extrabold">Header</h2>
        </div>
        <nav className="header-nav">
          <div className="header-nav-list flex gap-4 justify-center items-center">
            <div className="header-nav-list-item">
              <Link to="/">Home</Link>
            </div>
            {["About", "Contact", "Careers"].map((item, index) => {
              return (
                <div className="header-nav-list-item" key={index}>
                  <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                </div>
              );
            })}
          </div>
        </nav>
        <div className="">
          <button className="cursor-pointer" onClick={() => toggleTheme()}>
            dark theme
          </button>
        </div>
      </div>
    </header>
  );
}
