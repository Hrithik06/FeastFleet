import ARROW_DOWN from "../../icons/icons8-arrow-down-30.png";
import ItemList from "./ItemList";

const ResCategory = ({data, showItems, setShowIndex})=>{

    console.log(setShowIndex())
    
const {title, itemCards} = data?.card?.card;

const handleClick = ()=>{
setShowIndex();
}

    return <div className="w-8/12 my-6 py-1 shadow-xl mx-auto px-2 rounded-lg bg-slate-50">
        
        <div className="flex justify-between items-center cursor-pointer " onClick={handleClick}>
        <span className="font-bold text-2xl p-2">{title} ({itemCards.length})</span>
        <span className="mr-6">
        <img  src={ARROW_DOWN} alt="" />
        </span>
        </div>

        {showItems && <ItemList items={itemCards}/>}
    </div>
}

export default ResCategory;