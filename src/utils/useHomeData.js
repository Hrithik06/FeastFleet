import { HOME_API } from "./constants";
import { useEffect, useState } from "react";
const useHomeData = () => {
  const [listOfRes, setListOfRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOME_API);
    const json = await data.json();

    // Optional Chaining
    const apiData =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRes(apiData);
  };

  return listOfRes;
};

export default useHomeData;
