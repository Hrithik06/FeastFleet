import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HOME_API } from "../utils/constants";
const Main = () => {
  const [listOfRes, setListOfRes] = useState([]);
  // another state variable
  const [beforeList, setBeforeList] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  console.log(listOfRes)
  
  // Conditional Rendering
  // if(listOfRes.length === 0){
  //   return <Shimmer />
  // }
  // Ternary Operator
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
      <div className="filter">

        {/* <form action=""> */}
        <div className="search">
          <input
            type="text"
            id="searchText"
            placeholder="Your next yummy meal just a search away.."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onFocus={() => {
              if (beforeList.length != 0) {
                setListOfRes(beforeList);
              }
            }}
          />
          <button
            id="search-btn"
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
            <img width="30" height="30" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>
          </button>
        </div>

        {/* </form> */}
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

      <div className="res-container">
        {listOfRes.map((res) => (
          <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
            <ResCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
