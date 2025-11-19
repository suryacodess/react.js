import { createContext, useState, useContext } from "react";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [
    selectedCharacterFilterFromDropdown,
    setSelectedCharacterFilterFromDropdown,
  ] = useState("all");
  const value = {
    searchInput,
    setSearchInput,
    selectedCharacterFilterFromDropdown,
    setSelectedCharacterFilterFromDropdown,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export const useAppContext = () => useContext(AppContext);
