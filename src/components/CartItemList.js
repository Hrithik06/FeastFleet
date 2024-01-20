import VEG from "../../icons/icons8-veg-32.png";
import NON_VEG from "../../icons/icons8-non-veg-32.png";
import { CDN_URL } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice.js";
const CartItemList = ({ items }) => {

  const dispatch = useDispatch()

  const handleRemoveItem = (item)=>{
   dispatch( removeItem(item))

  }
  return (
    <div>
      {items.map((item) => (
        <div
          className="border-b-2 border-gray-200 my-4 pb-5 flex"
          key={item.card.info.id}
        >
          <div className=" px-6">
            <div className="absolute">
              <button
                className=" bg-white text-red-500 px-5 py-1 border-gray-300 border-2 rounded-md ml-5 mt-20 hover:bg-green-200"
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
      ))}
    </div>
  );
};

export default CartItemList;
