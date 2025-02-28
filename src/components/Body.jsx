import react from "react";
import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //local State Of Variable-Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic

            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restraunt
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restraunt) => (
          <RestaurentCard key={restraunt.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};
export default Body;
