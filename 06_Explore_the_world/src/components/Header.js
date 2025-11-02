import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  let [btnName, setbtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img src="LOGO_URL" alt="logo"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Cart</li>
                <button onClick={()=> {btnName=="Login" ? setbtnName("Logout") : setbtnName("Login")}}className="login">{btnName}</button>
                {/* is it re-rendering whole header or just button? whole header */}
            </ul>
        </div>
      </div>
    );
}

export default Header;