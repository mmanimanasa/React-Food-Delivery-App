import { useEffect, useState } from "react";
import { SWIGGY_RESMENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo,setresInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () => {
        const data = await fetch(
          SWIGGY_RESMENU_URL +
            resId +
            "&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        setresInfo(json.data)
    };
    return resInfo;
};
export default useRestaurantMenu;