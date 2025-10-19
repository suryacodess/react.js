import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import "./index.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route element={<App />} path="/"></Route>
      <Route element={<About />} path="/about"></Route>
      <Route element={<Contact />} path="/contact"></Route>
    </Routes>
  </BrowserRouter>
);
