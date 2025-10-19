import Cards from "./components/Cards";
import "./App.css";
import Input from "./components/Input";
import Hooks from "./components/Hooks";
const App = () => {
  return (
    <div className="app">
      <Input />
      <Hooks />
      <Cards />
    </div>
  );
};

export default App;
