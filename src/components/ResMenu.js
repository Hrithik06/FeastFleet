import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import Category from "./Category";
const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  // const params = useParams();
  // console.log(params);
  console.log(useState([]))
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    // console.log("hello");
    // console.log(resId);

    const apiData = await fetch(MENU_API + resId);
    const menuData = await apiData.json();

    const resInfo = menuData.data.cards;
    setResInfo(resInfo);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  //As per the API 2nd element of array contains the category and dishes
  const cards = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  //As per the API 0th element of array contains the restaurant name

  const resName = resInfo[0]?.card?.card?.info?.name;
  const deets = cards
    .slice(1, -2)
    .map((c) => <Category key={c?.card?.card?.title} cardData={c} />);

  return (
    <div className="res-menu">
      <h1>{resName}</h1>
      {deets}
      
    </div>
  );
};

export default ResMenu;
