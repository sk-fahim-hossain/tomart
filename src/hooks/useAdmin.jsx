import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Authcontext } from "../Providers/AuthProvider";

import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useContext(Authcontext);
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  const currentUser = users.filter((item) => item.email == user?.email);

  console.log(currentUser);
  if (currentUser[0]?.role && currentUser[0].role == "admin") {
    return true;
  } else {
    return false;
  }
};

export default useAdmin;
