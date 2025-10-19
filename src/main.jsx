import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import "./index.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import CareersDetails from "./pages/CareersDetails";
import Job from "./pages/Job";
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route element={<App />} path="/"></Route>
      <Route element={<About />} path="/about"></Route>
      <Route element={<Contact />} path="/contact"></Route>
      <Route element={<Careers />} path="/careers"></Route>
      <Route element={<CareersDetails />} path="/careers/careers-details"></Route>
      <Route element={<Job />} path="/careers/careers-details/:id"></Route>
      <Route path={"*"} element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
