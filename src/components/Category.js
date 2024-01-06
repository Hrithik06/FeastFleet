import Dish from "./Dish";
const Category = ({cardData}) => {
  //destructuiring on the fly
  

  const { title, itemCards } = cardData.card.card;
  const count = itemCards ? "(" + itemCards.length + ")" : "";

  return (
    <div key={title} className="category">
      <h3 className="font-bold text-xl">
        {title} {count}
      </h3>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            <Dish item={item}></Dish>
            <div className="divider my-8 h-1 border-solid border-gray border-b-2"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
