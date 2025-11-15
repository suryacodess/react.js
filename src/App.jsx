import "./App.css";
import Filters from "./components/Filters";
import Header from "./components/Header";
import Users from "./components/Users";

import { AppProvider } from "./context/Context";
const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <Filters />
        <Users />
      </div>
    </AppProvider>
  );
};

export default App;
