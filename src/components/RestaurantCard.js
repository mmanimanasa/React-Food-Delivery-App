import { CON_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo, sla } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={CON_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <span>
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "red" }
              : avgRatingString === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>.</h4>
        <h4>{costForTwo}</h4>
        <h4>.</h4>
        <h4>{sla.slaString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;