import "./App.css";
import Users from "./components/Users";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
const App = () => {
  ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
  });
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="app">
          <Users />
        </div>
      </div>
    </div>
  );
};

export default App;
