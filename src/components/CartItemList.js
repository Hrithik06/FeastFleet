import VEG from "../../icons/icons8-veg-32.png";
import NON_VEG from "../../icons/icons8-non-veg-32.png";
import { CDN_URL } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice.js";
import { useEffect, useState, useRef } from "react";
import * as Toast from "@radix-ui/react-toast";
const CartItemList = ({ items }) => {
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


  const dispatch = useDispatch()

  const handleRemoveItem = (item)=>{
   dispatch(removeItem(item))
   //RadixUI
   setOpen(false);
   setToastTitle( "Removed " + item.card.info.name );
   window.clearTimeout(timerRef.current);
   timerRef.current = window.setTimeout(() => {
     setOpen(true);
   }, 100);
  }
  return (
    <div>
      {items.map((item) => (
        
        <Toast.Provider swipeDirection="right" duration={1000}>

        <div
          className="border-b-2 border-gray-200 my-4 pb-5 flex"
          key={item.card.info.id}
        >
          <div className=" px-6">
            <div className="absolute">
              <button
                className=" bg-white text-red-500 px-3 py-1 border-gray-300 border-2 rounded-md mx-3 mt-20 hover:bg-green-200"
                onClick={()=>handleRemoveItem(item)}
              >
                Remove
              </button>
            </div>
            {item.card.info.imageId ? (
              <img
                className="w-36 h-28 rounded-lg"
                src={CDN_URL + item.card.info.imageId}
                alt=""
              />
            ) : (
              <p className="text-center w-36 h-28">No Image</p>
            )}
          </div>
          <div className="">
            <span className="font-medium">{item.card.info.name}</span>
            {item.card.info.itemAttribute.vegClassifier === "VEG" ? (
              <img src={VEG} alt="" />
            ) : (
              <img src={NON_VEG} alt="" />
            )}

            <p>
              ₹
              {(item.card.info.price
                ? item.card.info.price
                : item.card.info.defaultPrice) / 100}
            </p>

          </div>
        </div>
        <Toast.Root className={styles.rootStyle} open={open} onOpenChange={setOpen} type="background">
            <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px] truncate w-52">
              {toastTitle}
            </Toast.Title>

            <Toast.Close className={styles.closeButtonStyle}>OK</Toast.Close>
            
          </Toast.Root>
          <Toast.Viewport className={styles.viewPortStyle} />
        </Toast.Provider>
      ))}
    </div>
  );
};

export default CartItemList;
