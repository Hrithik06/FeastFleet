import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import CartItemList from "./CartItemList";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const itemTotal = cartItems.reduce((acc, curr) => {
    return (
     ( acc +
      (curr.card.info.price
        ? curr.card.info.price
        : curr.card.info.defaultPrice))
    );
  }, 0);

const gst = parseFloat(((itemTotal/100)*0.12).toFixed(2));

const totalPrice = (itemTotal/100+gst+40+3)



  return (
    <div className="my-4 mx-24 px-48">
      <div className="my-8 flex justify-between">
        <h2 className="text-3xl font-semibold ">
          Your Cart ({cartItems.length})
        </h2>

        <button
          className="w-32 py-2 border-solid border-2 border-black-700 rounded-full text-center  hover:font-medium shadow-lg hover:bg-red-100"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <div className="p-2 flex flex-col gap-2">
          <h2 className="text-2xl">
            Oops! Your Cart is as Empty as a Cookie Jar at Midnight 🍪
          </h2>
          <p className="text-xl">
            Looks like you haven't sprinkled any goodies into your cart yet! How
            about picking some delicious treats from our menu?
          </p>
          <div className="text-center">
            <Link to={"/"}>
              <button className="w-36 m-4 p-2 text-xl border-solid border-2 border-black-700 rounded-full text-center  hover:font-medium shadow-lg hover:bg-green-100">
                Let's Fill It Up! 😋
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="gap-4 flex">
          <div className="">{<CartItemList items={cartItems} />}</div>
          <div className=" border-l-2 p-4 w-1/3 ">
            <p className="font-semibold  text-2xl">Bill Details</p>
            <div className="flex justify-between p-2">
                <p>Item Total</p>
                <p>{itemTotal/100}</p>
            </div>
            <div className="flex justify-between p-2">
                <p>Delivery Fee</p>
                <p>40</p>
            </div>
            <div className="flex justify-between p-2">
                <p>Platform fee</p>
                <p>3</p>
            </div>
            <div className="flex justify-between border-b-2 p-2">
                <p>GST</p>
                <p>{gst}</p>
            </div>
            <div className="flex justify-between border-b-2 p-2">
            <p>To Pay</p>
            <p>₹ {totalPrice}</p>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
