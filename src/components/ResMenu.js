import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";


const ResMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  // const params = useParams();

  //using custom Hook which gives data using resId
  const resInfo = useResMenu(resId);

  const [showIndex, setShowIndex] = useState(0)



  if (resInfo === null) {
    return <ShimmerMenu />;
  }

  //As per the API 0th element of array contains the restaurant name
  const { name, avgRating, cuisines, areaName, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  //As per the API 2nd element of array contains the category and dishes
  
  // Getting Categories like Recommended from the array. This string signifes category "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (c)=>
    c?.card?.card?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  
)
// console.log(categories)



  return (
    <div className="mx-24">
      <div className="resDetails flex gap-24 mt-10 mx-auto justify-center ">
        <div>
          <h1 className="font-bold text-3xl">{name}</h1>
          <p>{areaName}</p>
        </div>
        <div>
          <p>{cuisines.join(", ")}</p>
          <p>{avgRating}  ⭐</p>
          <p>{costForTwoMessage}</p>
          
        </div>
      </div>

      {categories.map(
        (c,index )=> 
      <ResCategory data={c} 
      showItems={index===showIndex ? true:false} 
      indexCbFun={()=>setShowIndex(index)}
      index={index}
      key={c.card.card.title}/>
      )}
    </div>

  );
};

export default ResMenu;
