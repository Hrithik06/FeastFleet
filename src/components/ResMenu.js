import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import Category from "./Category";


const ResMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  // const params = useParams();

  //using custom Hook which gives data using resId
  const resInfo = useResMenu(resId);

  console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  //As per the API 0th element of array contains the restaurant name
  const { name, avgRating, cuisines, areaName, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  // const resRating = resInfo?.cards[0]?.card?.card?.info?.avgRating;
  // const cusines

  //As per the API 2nd element of array contains the category and dishes
  const cards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  //all menuCategory
  const menuCategory = cards
    .slice(1, -2)
    .map((c) => <Category key={c?.card?.card?.title} cardData={c} />);

  return (
    <div className="res-menu flex flex-col items-center  m-4">
      <div className="resDetails flex gap-24 my-16 p-4 ">
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

      <div>{menuCategory}</div>
    </div>
  );
};

export default ResMenu;
