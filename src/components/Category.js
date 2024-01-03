import { DISH_IMG } from "../utils/constants";

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
            {
              <div className="dish">
                <div className="textDetails">
                  <h4>{item?.card?.info?.name}</h4>
                  <h5>
                    ₹{" "}
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </h5>
                  <p>
                 { item?.card?.info?.description}
                  </p>
                </div>

                {item?.card?.info && "imageId" in item.card.info ? (
                  <img src={DISH_IMG + item?.card?.info?.imageId}></img>
                ) : (
                  <p>No Image</p>
                )}
              </div>
            }
            <div className="divider"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
