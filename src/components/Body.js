import RestaurantCard  from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_RES_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/userOnlineStatus";
import UserOffline from "./UserOffline";

const Body = () => {
    const [listofRestaurants,setlistofRestaurants] = useState([]);
    const [filteredRestaurants,setfilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const isOnline = useOnline();
    const [errorMsg,setErrorMsg] = useState("")
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () => {
      const data = await fetch(
        SWIGGY_RES_API
      );
      const json = await data.json();
      setlistofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    if(!isOnline){
      return (
       <UserOffline/>
      )
    }
    
  return listofRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="serach-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search a restaurant you want"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="serach-button"
          onClick={() => {
            const filterRestaurants = listofRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            if (filterRestaurants.length === 0) {
              setErrorMsg(
                `Sorry, we couldn't find any results for "${searchText}"`
              );
            } else {
              setErrorMsg("");
            }
            setfilteredRestaurants(filterRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMsg && <div>{errorMsg}</div>}
      {filteredRestaurants?.length == 0 ? (
       <></>
      ) : (
        <div className="res-container">
          {filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {" "}
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;