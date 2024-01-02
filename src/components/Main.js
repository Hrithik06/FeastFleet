import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
const Main = () => {
  const [listOfRes, setListOfRes] = useState([]);
// another state variable
  const [beforeList, setBeforeList] = useState([]);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9073473%26lng%3D77.6011195%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // Optional Chaining
    const apiData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRes(apiData);
  };

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
        <div className="search">
          <input
            type="text"
            id="searchText"
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
            Search
          </button>
        </div>

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
          <Link key={res.info.id}><ResCard resData={res}  /></Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
