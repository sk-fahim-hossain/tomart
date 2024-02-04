import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import CartDetailTable from "../components/CartDetailTable/CartDetailTable";
import { useContext } from "react";
import { Authcontext } from "../../Providers/AuthProvider";

const CartPage = () => {
  const { user } = useContext(Authcontext);
  const [cart] = useCart();
  const navigate = useNavigate();
  const userOrders = cart.filter((item) => item.email == user?.email);
  const total = userOrders.reduce((total, item) => total + item.price, 0);
  // const total = 100;
  console.log(total);
  return (
    <div className="p-8">
      <div className="flex justify-around">
        <h2 className="text-3xl">Items: {userOrders.length}</h2>
        <h2 className="text-3xl">Total Price: ${total.toFixed(2)}</h2>
      </div>
      <CartDetailTable cart={userOrders}></CartDetailTable>
      <div className="flex justify-between">
        <button
          onClick={() => navigate("/")}
          className="btn bg-[#FF217F] border-0 btn-sm"
        >
          Continue shopping
        </button>
        <Link to="https://buy.stripe.com/test_aEUaHEgJz1Gp9Gg4gg">
          <button className="btn bg-[#fdfa3a] border-0 btn-sm">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
