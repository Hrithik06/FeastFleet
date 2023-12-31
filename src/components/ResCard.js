import { CDN_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
  // console.log(props)
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
      className="res-card w-64 
   hover:shadow-lg rounded-lg"
    >
      {/* <div className="img"> */}
      <img
        className="res-logo rounded-lg h-44 w-full"
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
        // style={"height: 100%; width: 100%;"}
      />
      {/* </div> */}
      <div className="textDetails m-2">
        <h3 className="font-bold ">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5 className="font-medium">
          {avgRating} ⭐•{slaString}
        </h5>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

//Higher order Components

//input - ResCard =>  withOfferResCard

export const withOfferResCard = (ResCard) => {
  //component returning

  return (props) => {
    const { header, subHeader } = props.resData.info.aggregatedDiscountInfoV3;
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
