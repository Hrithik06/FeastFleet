import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useResMenu = (resId)=>{
const [resInfo,setResInfo] = useState(null)
useEffect(()=>{
    fetchMenuData()
}, []);

const fetchMenuData = async ()=>{
    const apiData =await fetch(MENU_API+resId)
    const json  = await apiData.json();
    setResInfo(json.data)
    
}

    return resInfo;
}

export default useResMenu;