import Dish from "./Dish";
const Category = ({cardData}) => {
  //destructuiring on the fly
  

  const { title, itemCards } = cardData.card.card;
  const count = itemCards ? "(" + itemCards.length + ")" : "";

  return (
    <div key={title} className="category">
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
