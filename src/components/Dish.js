import { DISH_IMG } from "../utils/constants";

const Dish = (props) => {




  const veg = <img width="32" height="32" src="https://img.icons8.com/color-glass/32/vegetarian-food-symbol.png" alt="vegetarian-food-symbol"/>

  const nonveg = <img width="32" height="32" src="https://img.icons8.com/color-glass/32/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol"/>

  const { item } = props;

  const { name, price, defaultPrice, imageId, description, itemAttribute:{vegClassifier} } = item.card.info;
  console.log(vegClassifier)
  

  return (
    <div className="dish w-[800px] h-32 m-4 flex justify-between items-center gap-28">
      <div className="textDetails">

        <div>{
          (vegClassifier==="VEG")?veg:nonveg
          }</div>
        <h4 className="font-medium">{name}</h4>
        <h5>₹ {price / 100 || defaultPrice / 100}</h5>
        <p>{description}</p>
      </div>

      {item?.card?.info && "imageId" in item.card.info ? (
        <div><img src={DISH_IMG + imageId} alt="Dish" className="w-40 h-32 rounded-lg"></img></div>
      ) : (
        <div className="w-40 h-32 border-solid border-2 border-gray-300 rounded-lg flex items-center justify-center">No Image</div>
      )}
    </div>
  );
};

export default Dish;
