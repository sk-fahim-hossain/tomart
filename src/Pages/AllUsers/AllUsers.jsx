import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoTrashBinOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaUserGear } from "react-icons/fa6";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/users");
      return res.data;
    },
  });
  console.log(users);

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
        axios.delete(`http://localhost:5000/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const makeAdmin = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this person an Admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${userId}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Done!",
              text: "You made an admin",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      total users: {users.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Orders</th>
              <th>Make admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to="/orders">
                    <button className="btn btn-ghost btn-sm">Show Order</button>
                  </Link>
                </td>
                <td>
                  {user.role == "admin" ? (
                    "admin"
                  ) : (
                    <FaUserGear
                      onClick={() => makeAdmin(user._id)}
                      className="text-lg cursor-pointer"
                    />
                  )}
                </td>
                <td>
                  <IoTrashBinOutline
                    onClick={() => handleDelete(user)}
                    className="text-lg cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
