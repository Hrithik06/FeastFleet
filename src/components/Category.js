import Dish from "./Dish";
const Category = (props) => {
  const { cardData } = props;

  const { title, itemCards } = cardData.card.card;
  const count = itemCards ? "(" + itemCards.length + ")" : "";
  return (
    <div key={props?.card?.card?.title} className="category">
      <h3>
        {title} {count}
      </h3>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            <Dish item={item}></Dish>
            <div className="divider"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
