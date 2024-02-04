import { useContext, useEffect, useState } from "react";
import ToyCard from "../../components/ToyCard/ToyCard";
import { DataContext } from "../../../Providers/DataProvider";

const ProductsContainer = () => {
  const { toys } = useContext(DataContext);
  const [category, setCategory] = useState("all");
  const [displayToys, setDisplayToys] = useState([]);

  useEffect(() => {
    setDisplayToys(toys);
  }, [toys]);
  const loadCategory = (setToy) => {
    setCategory(setToy);
    if (setToy === "all") {
      return setDisplayToys(toys);
    }

    const filteredToys = toys.filter(
      (toy) => toy.subCategory.toLowerCase() === setToy.toLowerCase()
    );
    setDisplayToys(filteredToys);
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4 mt-4">
      <div className="space-x-4 my-8">
        <button
          onClick={() => loadCategory("all")}
          className={`${
            category === "all" ? "bg-[#FF217F] btn border-0" : "btn"
          } hover:bg-orange`}
        >
          All Toys
        </button>
        <button
          onClick={() => loadCategory("hot wheels")}
          className={`${
            category === "hot wheels" ? "bg-[#FF217F] btn border-0" : "btn"
          } `}
        >
          Hot Wheels
        </button>
        <button
          onClick={() => loadCategory("rc cars")}
          className={`${
            category === "rc cars" ? "bg-[#FF217F] btn border-0" : ""
          } btn`}
        >
          RC Cars
        </button>
        <button
          onClick={() => loadCategory("cast toy")}
          className={`${
            category === "casty cars" && "bg-[#FF217F] btn border-0"
          } btn`}
        >
          Cast Cars
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {displayToys?.map((toy) => (
          <ToyCard key={toy.id} toy={toy}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
