import { useContext } from "react";
import { MyContext } from "../MyContext";
import { CON_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const Cart = () => {
    const { additems, setadditems} = useContext(MyContext);
    console.log(additems)
    //if(additems === null || additems.length == 0 )  return <h1>No items in the cart</h1>
    return (
      <div className="cart-content">
        <div className="cart-container">
          <div className="cart-title-wrap">
            {additems === null || additems.length == 0 ? (
              <h2>Currently No  items are added to cart</h2>
            ) : (
              <>
                <h3 className="cart-title">Cart Items</h3>
                <p className="cart-count">{additems?.length}ITEMS</p>
              </>
            )}
          </div>
          <div className="cart-items-list">
            {additems?.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item.details">
                  <h3 className="cart-title">{item.name}</h3>
                </div>
                <div className="cart-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="cart-item-img"
                      src={CON_URL + item.imageId}
                      alt={item?.name}
                    ></img>
                  )}
                </div>
                <p className="cart-cost">
                  {item.price > 0 || item.defaultPrice
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(item.price / 100 || item.defaultPrice / 100)
                    : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Cart;