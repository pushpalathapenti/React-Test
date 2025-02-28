import react from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
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
export default Header;
