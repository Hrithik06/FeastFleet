import { DISH_IMG } from "../utils/constants";

const Dish = (props) => {
  const { item } = props;

  const { name, price, defaultPrice, imageId, description } = item.card.info;

  return (
    <div className="dish">
      <div className="textDetails">
        <h4>{name}</h4>
        <h5>₹ {price / 100 || defaultPrice / 100}</h5>
        <p>{description}</p>
      </div>

      {item?.card?.info && "imageId" in item.card.info ? (
        <img src={DISH_IMG + imageId}></img>
      ) : (
        <p>No Image</p>
      )}
    </div>
  );
};

export default Dish;
