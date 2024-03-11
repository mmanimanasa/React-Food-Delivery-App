import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL}></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;