// import { CDN_URL } from "../utils/constants";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";


const ResMenu = () => {
  // const [resInfo, setResInfo] = useState(null);


  const { resId } = useParams();
  // const params = useParams();

  //using custom Hook which gives data using resId
  const resInfo = useResMenu(resId);

  console.log(resInfo);

  if (resInfo === null) {
    return <ShimmerMenu/>
  }
  //As per the API 0th element of array contains the restaurant name
  const { name, avgRating, cuisines, areaName, costForTwoMessage, cloudinaryImageId, totalRatingsString } =
    resInfo?.cards[0]?.card?.card?.info;

  //As per the API 2nd element of array contains the category and dishes
  const cards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  //all menuCategory
  const menuCategory = cards
    .slice(1, -2)
    .map((c) => <Category key={c?.card?.card?.title} cardData={c} />);

  return (
    <div className="mx-24">
      <div className="resDetails flex gap-24 mt-10 mx-auto justify-center ">
        <div>
          <h1 className="font-bold text-3xl">{name}</h1>
          <p>{areaName}</p>
          <p>{cuisines.join(", ")}</p>
          <p>{avgRating}  ⭐</p>
          <p>{totalRatingsString}</p>
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
