import { useState } from "react";
import LOGO_URL from "../../icons/logo.png";
import { Link } from "react-router-dom";

const Header = () => {

  // let btnName = "Login"
  const [btnName, setbtnName] = useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
          <a href="/"> 
          <img src={LOGO_URL} alt="logo" />
          </a>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/"> Home </Link> </li>
            <li><Link to = "/about">About Us</Link></li>
            <li><Link to = "/contact">Contact Us</Link></li>
            <li>Cart </li>
            <button className="login-btn" 
            onClick={()=>{
              btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
            }}>{btnName}</button>

            {/* <button>{btnName}</button> */}
          </ul>
        </div>
      </div>
    );
  };

export default Header;