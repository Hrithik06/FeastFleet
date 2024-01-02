import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { RES_INFO_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const [resId] = useParams();
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    console.log("hello");
console.log(resId)

    const apiData = await fetch(RES_INFO_URL + resId);
    const menuData = await apiData.json();

    console.log(menuData);

    const resInfo = menuData.data.cards;
    setResInfo(resInfo);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="res-menu">
      <h1>{resInfo[0].card.card.info.name}</h1>
      <h3>
        {resInfo[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title}
      </h3>

      <ul>
        {resInfo[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
          (item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs {item.card.info.price / 100}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ResMenu;
