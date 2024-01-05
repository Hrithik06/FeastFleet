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

  if (resInfo === null) {
    return <Shimmer />;
  }

  //As per the API 0th element of array contains the restaurant name
  const resName = resInfo?.cards[0]?.card?.card?.info?.name;

  //As per the API 2nd element of array contains the category and dishes
  const cards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  //all menuCategory
  const menuCategory = cards
    .slice(1, -2)
    .map((c) => <Category key={c?.card?.card?.title} cardData={c} />);

  return (
    <div className="res-menu">
      <h1>{resName}</h1>
      {menuCategory}
    </div>
  );
};

export default ResMenu;
