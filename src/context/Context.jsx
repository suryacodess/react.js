import { createContext, useState, useContext } from "react";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const value = {
    searchInput,
    setSearchInput,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export const useAppContext = () => useContext(AppContext);
