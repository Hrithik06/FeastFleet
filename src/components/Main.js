import ResCard, { withOfferResCard } from "./ResCard";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HOME_API, UPDATE_LIST } from "../utils/constants";
import UserContext from "./UserContext";
import ScrollDetector from "./ScrollDetector";

const Main = () => {
  const [listOfRes, setListOfRes] = useState([]);
  // another state variable
  const [beforeList, setBeforeList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);



  // const handleShowMore = async () => {




  //   const payload ={
  //     "lat": 12.9328638,
  //     "lng": 77.6139346,
  //     "nextOffset": "COVCELQ4KIDo+J+28sP6NzCnEzgE",
  //     "widgetOffset": {
  //         "NewListingView_category_bar_chicletranking_TwoRows": "",
  //         "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
  //         "Restaurant_Group_WebView_PB_Theme": "",
  //         "Restaurant_Group_WebView_SEO_PB_Theme": "",
  //         "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "10",
  //         "inlineFacetFilter": "",
  //         "restaurantCountWidget": ""
  //     },
  //     "filters": {},
  //     "seoParams": {
  //         "seoUrl": "https://www.swiggy.com/",
  //         "pageType": "FOOD_HOMEPAGE",
  //         "apiName": "FoodHomePage"
  //     },
  //     "page_type": "DESKTOP_WEB_LISTING",
  //     "_csrf": "dWtQ4mDE4eqE-I7bUVuw-IIkO7t-sbzJH_2KI45U"
  // }
  // fetch(UPDATE_LIST, {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(payload),
  // })
  // .then(response => {
  //     if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  // })
  // .then(data => {
  //     console.log(data); // Handle response data here
  // })
  // .catch(error => {
  //     console.error('There was a problem with the fetch operation:', error);
  // });
  
  // }

  const fetchData = async () => {
console.log(HOME_API)


      const data = await fetch(HOME_API);
      // console.log(data);
      // Check if the response status is OK

      const json = await data.json();
       console.log(json)

      // Optional Chaining
      const apiData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
          console.log(apiData)
          
      setListOfRes(apiData);

      // console.log(listOfRes)
      
    
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
            data-testid="searchInput"
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
            data-testid = "searchBtn"
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
        {/* <div>
          <label htmlFor="userName">UserName: </label>
          <input
            id="userName"
            type="text"
            className="p-2 border-2 border-gray-300 rounded-full"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div> */}

        <button
          className="filter-btn w-60 py-2 border-solid border-2 border-black-700 rounded-full text-center shadow-lg hover:bg-green-200 transition ease-in duration-500"
          onClick={() => {
            //updating the UI
            const filterList = listOfRes.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRes(filterList);
          }}
        >Top Rated Restaurants</button>
      </div>

      <div className="res-container gap-10 mx-16 m-5 flex flex-wrap justify-start">
        {listOfRes.map((res, index) => (
          <Link
            className=""
            to={"/restaurant/" + res.info.id}
            key={res.info.id}
            
          >
            {
              // If any of these objects are undefined, attempting to access properties deeper in the hierarchy will result in a TypeError. To prevent the error, you should ensure that all the nested properties are defined before trying to access discountTag.

              res &&
              res.info &&
              res.info.aggregatedDiscountInfoV3 &&
              res.info.aggregatedDiscountInfoV3.discountTag === undefined ? (
                <OfferedResCard resData={res} />
              ) : (
                <ResCard resData={res} />
              )
            }
          </Link>
        ))}
      </div>
  {/* <button onClick={handleShowMore}>show more</button> */}

    </div>
  );
};

export default Main;
