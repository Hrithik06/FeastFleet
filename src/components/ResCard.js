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
    <div className="res-card w-64 h- border-solid border-2 border-black-700 rounded-lg  text-base">
      <div className="img">
      <img
        className="res-logo w-full h-44 rounded-lg "
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
      />
      </div>
      <div className="textDetails p-2">
        <h3 className="font-bold ">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating}  ⭐</h5>
        <h5>{slaString}</h5>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default ResCard;
