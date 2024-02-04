import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const isAdmin = useAdmin();

  if (isAdmin) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default AdminRoute;
