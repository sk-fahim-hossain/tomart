import React, { useState } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const CartDetailTable = ({ cart }) => {
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          refetch();
        });
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
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Product Id</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => (
              <tr key={item._id}>
                <th>
                  <IoTrashBinOutline
                    onClick={() => handleDelete(item._id)}
                    className="text-lg text-white cursor-pointer "
                  />
                </th>
                <th>
                  <img src={item.img} alt="" className="w-20" />
                </th>
                <td>{item.name}</td>
                <td>{item._id}</td>
                <td>1</td>
                <th>{item.price}</th>
                <th>Total</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartDetailTable;
