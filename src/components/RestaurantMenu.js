import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { SWIGGY_RESMENU_URL, CON_URL } from "../utils/constants";
import { MenuShimmer } from "./Shimmer";
const RestaurantMenu = () => {
    const [resInfo, setInfo] = useState(null);
    const [addeditems, setaddeditems] = useState([]);
    const {resId} = useParams()
    useEffect(()=> {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(
          SWIGGY_RESMENU_URL +
            resId +
            "&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        setInfo(json.data)
        console.log(resInfo)
    }
    if (resInfo === null)  return <MenuShimmer />
    
    const {
      name,
      cuisines,
      costForTwoMessage,
      cloudinaryImageId,
      avgRatingString,
      sla
    } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = 
    // resInfo?.cards.find((x) => x.groupedCard)
    //   ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card.card)
    //   ?.filter((x) => x["type"] == "CATEGORY_TYPE_RECOMMENDED")?.map(x=>x.itemCards).flat().map(x=> x.card?.info) || [];
    resInfo?.cards?.find((x) => x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
      <div className="restaurant-menu">
        <div className="restaurant-summary">
          <img
            className="restaurant-img"
            src={CON_URL + cloudinaryImageId}
            alt={name}
          ></img>
          <div className="restaurant-summary-details">
            <h2 className="restaurant-tittle">{name}</h2>
            <p>{cuisines?.join(",")}</p>
            <div className="restaurant-details">
              <div
                className="restaurant-rating"
                style={
                  avgRatingString < 4
                    ? { backgroundColor: "red" }
                    : avgRatingString === "--"
                    ? { backgroundColor: "white", color: "black" }
                    : { color: "white" }
                }
              >
                  <i className="fa-solid fa-star"></i>
                <span>{avgRatingString}</span>
              </div>
              <div className="restaurant-rating-slash">|</div>
              <div>{sla?.slaString}</div>
              <div className="restaurant-rating-slash">|</div>
              <div>{costForTwoMessage}</div>
            </div>
          </div>
        </div>

        <div className="restaurant-menu-content">
          <div className="menu-items-container">
            <div className="menu-title-wrap">
              <h3 className="menu-title">Recommended</h3>
              <p className="menu-count">{itemCards?.length}ITEMS</p>
            </div>
            <div className="menu-items-list">
              {itemCards?.map((item) => (
                <div className="menu-item" key={item.card.info.id}>
                  <div className="menu-item.details">
                    <h3 className="item-title">{item.card.info.name}</h3>
                    <p className="item-cost">
                      {item.card.info.price > 0 || item.card.info.defaultPrice
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(
                            item.card.info.price / 100 ||
                              item.card.info.defaultPrice / 100
                          )
                        : ""}
                    </p>
                    <p className="item-desc">{item.card.info.description}</p>
                  </div>
                  <div className="menu-img-wrapper">
                    {item?.card?.info?.imageId && (
                      <img
                        className="menu-item-img"
                        src={CON_URL + item.card.info.imageId}
                        alt={item?.card?.info?.name}
                      ></img>
                    )}
                    <button className="add-btn" onClick={() => {
                      const cartitems = cartitems.push(item)
                      setaddeditems(cartitems)
                    }} >ADD +</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
export default RestaurantMenu;