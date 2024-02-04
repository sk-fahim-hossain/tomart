import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Providers/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const UserOrder = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(Authcontext);
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const URL = `http://localhost:5000/carts?email=${user?.email}`;
  useEffect(() => {
    axios.get(URL).then((res) => setData(res.data));
  }, [cart]);

  const handleDeliver = (productId) => {
    axiosSecure.patch(`/carts/${productId}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Done!",
          text: "Order Completed!",
          icon: "success",
        });
        refetch();
      }
    });
    console.log(productId);
  };

  const handleDelete = (id) => {
    axiosSecure.delete(`/carts/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        Swal.fire({
          title: "Done!",
          text: "Order Completed!",
          icon: "success",
        });
        refetch();
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delivery Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={item._id} className="bg-base-200">
                <th>{i + 1}</th>
                <th>
                  <img src={item.img} className="w-20" alt="" />
                </th>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  {item.deliveryStatus ? (
                    <p className="text-green-700">Completed</p>
                  ) : (
                    <button
                      onClick={() => handleDeliver(item._id)}
                      className="btn btn-primary"
                    >
                      Deliver
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-warning"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserOrder;
