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
    <div className="res-card w-64 border-solid border-2 border-black-700 rounded-lg">
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
        <h5>{avgRating}  ⭐</h5>
        <h5>{slaString}</h5>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default ResCard;
