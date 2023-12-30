import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
    // console.log(props)
  const {resData} = props
    const { cloudinaryImageId, name,cuisines, avgRating,  sla: { slaString } , costForTwo } = resData?.info;
    // console.log(resData);
  

    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="res-img"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating } Stars</h5>
        <h5>{slaString}</h5>
        <p>{costForTwo}</p>
      </div>
    );
  };

  export default ResCard;