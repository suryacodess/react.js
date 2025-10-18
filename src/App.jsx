import "./App.css";
import Gallery from "./components/Gallery";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
const App = () => {
  const scc = ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
  });
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="app">
          <Gallery sc={scc} />
        </div>
      </div>
    </div>
  );
};

export default App;
