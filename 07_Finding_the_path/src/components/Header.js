import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  console.log("Header render");

  return (
    <div className="header">
      <div className="logo-container">
        <img src="LOGO_URL" alt="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
            className="login"
          >
            {btnName}
          </button>
          {/* is it re-rendering whole header or just button? whole header */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
