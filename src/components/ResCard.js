import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "./UserContext";

const ResCard = ({ resData }) => {

  
  const {loggedInUser} = useContext(UserContext)
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla: { slaString },
    costForTwo,
  } = resData?.info;
  // console.log(resData);

  return (
    <div
      className="res-card w-64 transition ease-in-out duration-200 delay-75
   hover:shadow-lg rounded-lg
   "
    >
      {/* <div className="img"> */}
      <img
        className="res-logo rounded-lg h-44 w-full "
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
        // style={"height: 100%; width: 100%;"}
      />
      {/* </div> */}
      <div className="textDetails m-2">
        <h3 className="font-bold truncate">{name}</h3>
        <h4 className="truncate">{cuisines.join(", ")}</h4>
        <h5 className="font-medium">
          {avgRating} ⭐
         <span className="flex gap-2">{<img className="w-5" src={CDN_URL+"v1648635511/Delivery_fee_new_cjxumu"}/>}{slaString}</span> 
        </h5>
        <p>{costForTwo}</p>
        {/* <p>{loggedInUser}</p> */}

      </div>
    </div>
  );
};

//Higher order Components

//input - ResCard =>  withOfferResCard

export const withOfferResCard = (ResCard) => {
  //component returning

  return (props) => {
    const { header, subHeader } = props?.resData?.info?.aggregatedDiscountInfoV3;
    // console.log(props.resData.info.aggregatedDiscountInfoV3);

    return (
      <div className="relative">
        <ResCard {...props} />

        <div
          className="bg-red  absolute top-[150px] w-full bg-gradient-to-b from-transparent to-gray-900 rounded-lg"
        >
          <label className=" text-white ml-2 text-xl font-bold">
            {header + " " + subHeader}
          </label>
        </div>
      </div>
    );
  };
};

export default ResCard;
