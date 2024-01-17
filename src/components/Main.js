import ResCard, { withOfferResCard } from "./ResCard";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HOME_API } from "../utils/constants";
import UserContext from "./UserContext";

const Main = () => {
  const [listOfRes, setListOfRes] = useState([]);
  // another state variable
  const [beforeList, setBeforeList] = useState([]);
  const [searchText, setSearchText] = useState("");
const{loggedInUser,setUserName} = useContext(UserContext)
  useEffect(() => {
    fetchData();
  }, []);



  const fetchData = async () => {
    const data = await fetch(HOME_API);

    const json = await data.json();
    // Optional Chaining
    const apiData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRes(apiData);
  };


  const OfferedResCard = withOfferResCard(ResCard);

  // Conditional Rendering
  // if(listOfRes.length === 0){
  //   return <Shimmer />
  // }
  // Ternary Operator
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main mx-24">
      <div className="filter p-5 mx-16 flex items-center justify-between">
        <div className="search flex justify-around">
          <input
            className="w-96 px-2 border-solid border-2 border-gray-300 rounded-full shadow-lg"
            type="text"
            id="searchText"
            placeholder="Search for Restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onFocus={() => {
              if (beforeList.length !== 0) {
                setListOfRes(beforeList);
              }
            }}
          />
          <button
            id="search-btn"
            className="p-2"
            onClick={() => {
              // copying listOfRes to beforeList
              setBeforeList(listOfRes);

              // filtering, this is modifying the main list
              const searchList = listOfRes.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              //modifying the main list listOfRes
              setListOfRes(searchList);
            }}
          >
            {/* Search */}
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios/50/search--v1.png"
              alt="search--v1"
            />
          </button>
        </div>
        <div>
          <label htmlFor="userName">UserName: </label>
          <input
            id="userName"
            type="text"
            className="p-2 border-2 border-gray-300 rounded-full"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="w-60 py-2 border-solid border-2 border-black-700 rounded-full text-center  hover:font-medium shadow-lg hover:bg-green-100">
          <button
            className="filter-btn"
            onClick={() => {
              //updating the UI
              const filterList = listOfRes.filter(
                (res) => res.info.avgRating > 4.2
              );
              setListOfRes(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container mx-16 m-5 flex flex-wrap gap-0 justify-around ">
        {listOfRes.map((res) => (
          <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
            {
              // res.info.aggregatedDiscountInfoV3 &&
              res.info.aggregatedDiscountInfoV3.discountTag === undefined ? (
                // console.log(res.info.aggregatedDiscountInfoV3.discountTag)

                <OfferedResCard resData={res} />
              ) : (
                <ResCard resData={res} />
                // console.log(res.info.aggregatedDiscountInfoV3.discountTag)
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
