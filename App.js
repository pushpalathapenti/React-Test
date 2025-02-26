import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 * -Logo Component
 * -NavItem Component
 *
 * Body
 * -Search Component
 * -Restaurent Container
 *  --Restaurent Cards
 *    ---Img
 *    ---Name of Res, Star Rating,Cuisine,DeliveryTime.
 *
 * Footer
 * -Copyright
 * -Links
 * --Adress
 * --Contact
 *
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>AboutUS</li>
          <li>ContactUS</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, deliveryTime } = resData;
  console.log(props);
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1707228298/7b869c0eb250ade73c25ae035ce62e2d.jpg"
        alt="resLogo"
      />
      <h3>{name || "No Name Available"}</h3>
      <h4>{cuisines.join(",") || "No Cuisine Info"}</h4>
      <h4>{avgRating || "No Rating"} Stars</h4>
      <h4>{deliveryTime || "No Delivery Time"}</h4>
    </div>
  );
  s;
};
const resList = [
  {
    id: 1,
    name: "Meghana Foods",
    cuisines: ["Biryani", "Andhra"],
    avgRating: "4.5",
    deliveryTime: "30 mins",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/sample1.jpg",
  },
  {
    id: 2,
    name: "Truffles",
    cuisines: ["Burgers", "American"],
    avgRating: "4.3",
    deliveryTime: "25 mins",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/sample2.jpg",
  },
  {
    id: 3,
    name: "Empire Restaurant",
    cuisines: ["North Indian", "Chinese"],
    avgRating: "4.2",
    deliveryTime: "28 mins",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/sample3.jpg",
  },
  {
    id: 4,
    name: "KFC",
    cuisines: ["Fried Chicken", "Fast Food"],
    avgRating: "4.1",
    deliveryTime: "20 mins",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/sample4.jpg",
  },
  {
    id: 5,
    name: "Pizza Hut",
    cuisines: ["Pizza", "Italian"],
    avgRating: "4.0",
    deliveryTime: "22 mins",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/sample5.jpg",
  },
  {
    id: 6,
    name: "Domino's Pizza",
    cuisines: ["Pizza", "Fast Food"],
    avgRating: "4.3",
    deliveryTime: "24 mins",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/sample6.jpg",
  },
  {
    id: 7,
    name: "Burger King",
    cuisines: ["Burgers", "American"],
    avgRating: "4.2",
    deliveryTime: "27 mins",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/sample7.jpg",
  },
  {
    id: 8,
    name: "Subway",
    cuisines: ["Healthy", "Sandwiches"],
    avgRating: "4.1",
    deliveryTime: "26 mins",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/sample8.jpg",
  },
  {
    id: 9,
    name: "McDonald's",
    cuisines: ["Burgers", "Fast Food"],
    avgRating: "4.4",
    deliveryTime: "18 mins",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/sample9.jpg",
  },
  {
    id: 10,
    name: "Taco Bell",
    cuisines: ["Mexican", "Fast Food"],
    avgRating: "4.0",
    deliveryTime: "23 mins",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/sample10.jpg",
  },
  {
    id: 11,
    name: "A2B (Adyar Ananda Bhavan)",
    cuisines: ["South Indian", "Desserts"],
    avgRating: "4.3",
    deliveryTime: "29 mins",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/sample11.jpg",
  },
  {
    id: 12,
    name: "Paradise Biryani",
    cuisines: ["Biryani", "Hyderabadi"],
    avgRating: "4.6",
    deliveryTime: "30 mins",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/sample12.jpg",
  },
  {
    id: 13,
    name: "Starbucks",
    cuisines: ["Coffee", "Beverages"],
    avgRating: "4.5",
    deliveryTime: "15 mins",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/sample13.jpg",
  },
  {
    id: 14,
    name: "Haldiram's",
    cuisines: ["Indian", "Snacks"],
    avgRating: "4.2",
    deliveryTime: "20 mins",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/sample14.jpg",
  },
  {
    id: 15,
    name: "Saravana Bhavan",
    cuisines: ["South Indian", "Vegetarian"],
    avgRating: "4.5",
    deliveryTime: "28 mins",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/sample15.jpg",
  },
];
// Not using Keys is {not acceptble} <<<<<Index as key <<<<<<< Unique ID{Best Practice}
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restraunt) => (
          <RestaurentCard key={restraunt.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
