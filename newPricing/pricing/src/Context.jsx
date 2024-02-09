import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const link = "http://localhost:3000/name";
  const [enable, setEnable] = useState(false);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const response = await axios.get(link);
      if (enable) {
        setPackages(response.data.monthly);
      } else {
        setPackages(response.data.yearly);
      }
    };
    getApi();
  }, [enable]);

  return (
    <Context.Provider value={{ enable, setEnable, packages }}>
      {children}
    </Context.Provider>
  );
};
