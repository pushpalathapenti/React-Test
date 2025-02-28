import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, deliveryTime } = resData;
  // console.log(props);
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img className="res-logo" src={CDN_URL} alt="resLogo" />
      <h3>{name || "No Name Available"}</h3>
      <h4>{cuisines.join(",") || "No Cuisine Info"}</h4>
      <h4>{avgRating || "No Rating"} Stars</h4>
      <h4>{deliveryTime || "No Delivery Time"}</h4>
    </div>
  );
  s;
};
export default RestaurentCard;
