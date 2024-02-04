import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

import Swal from "sweetalert2";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { useContext } from "react";
import { Authcontext } from "../../Providers/AuthProvider";

const ProductDetails = () => {
  const { user } = useContext(Authcontext);
  const data = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddCart = () => {
    const newItem = {
      cartId: data._id,
      email: user?.email,
      name: data.productName,
      img: data.img,
      price: data.price,
    };

    axiosSecure.post("/carts", newItem).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Item added successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        refetch();
      }
    });
  };
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                className="w-full h-64 object-cover mb-4 rounded-lg shadow"
                src={data.img}
                alt="Product"
              />
            </div>
            <div className="md:w-1/2 md:ml-8">
              <h1 className="text-3xl font-semibold mb-4">
                {data.productName}
              </h1>
              <p className="text-gray-700 mb-4">{data.details}</p>
              <Rating
                initialRating={data.ratings}
                emptySymbol={<IoMdStarOutline className="text-orange-600" />}
                placeholderSymbol={<IoMdStarHalf />}
                fullSymbol={<IoMdStar className="text-orange-600" />}
              />

              <p className="text-gray-800 font-semibold mb-2">
                Price: ${data.price}
              </p>
              <button
                onClick={handleAddCart}
                className="bg-[#FF217F] text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
