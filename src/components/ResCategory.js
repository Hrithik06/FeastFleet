import { useState } from "react";
import ARROW_DOWN from "../../icons/icons8-arrow-down-30.png";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, indexCbFun, index }) => {
  const { title, itemCards } = data?.card?.card;


  //This state var is tracking click of category
  // false- by default all are collapsed 
const [click, setClick] = useState(false)

  const handleClick = () => {

    // toggling clicks
    //1st click set to true shows items, second click set to false hides items
    setClick(!click);
    indexCbFun();
  };

  return (
    <div className="w-8/12 my-6 py-1 shadow-xl mx-auto px-2 rounded-lg bg-slate-50">
      <div
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        <span className="font-bold text-2xl p-2">
          {title} ({itemCards.length})
        </span>
        <span className="mr-6">
          <img src={ARROW_DOWN} alt="" />
        </span>
      </div>

{ /*
 result of AND operator of
 true && false == false
 click = true showItems = true Display items
 click = false showItems = true Hides items
*/}
      {click && showItems && <ItemList items={itemCards} />}
    </div>
  );
};

export default ResCategory;
