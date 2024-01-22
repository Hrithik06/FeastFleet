import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import CartItemList from "./CartItemList";
import { useEffect, useState, useRef } from "react";
import * as Toast from "@radix-ui/react-toast";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const styles = {

  
    rootStyle :
     "  p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut fixed top-[90px] right-0 z-50 rounded-lg m-2 bg-slate-50 shadow-sm ",
 
      closeButtonStyle : "rounded-lg font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8",
 
      viewPortStyle : "[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none",
 
   }
     //RadixUI
     const [open, setOpen] = useState(false);
     const timerRef = useRef(0);
     const [toastTitle, setToastTitle] = useState("Default Title");
     useEffect(() => {
       return () => clearTimeout(timerRef.current);
     }, []);
  
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());

       //RadixUI
   setOpen(false);
   (cartItems.length!==0)?setToastTitle("Cart Cleared"):setToastTitle("Nothing to clear");
   window.clearTimeout(timerRef.current);
   timerRef.current = window.setTimeout(() => {
     setOpen(true);
   }, 100);
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
    <Toast.Provider swipeDirection="right" duration={1000}>

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
                <p>GST(12%)</p>
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
    <Toast.Root className={styles.rootStyle} open={open} onOpenChange={setOpen} type="background">
            <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
              {toastTitle}
            </Toast.Title>

            <Toast.Close className={styles.closeButtonStyle}>OK</Toast.Close>
            
          </Toast.Root>
          <Toast.Viewport className={styles.viewPortStyle} />
        </Toast.Provider>
  );
};

export default Cart;
