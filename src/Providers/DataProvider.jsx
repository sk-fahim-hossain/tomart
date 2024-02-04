import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const productData = {
    toys,
  };
  return (
    <DataContext.Provider value={productData}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
