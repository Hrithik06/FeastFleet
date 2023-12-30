import { useState } from "react";
import LOGO_URL from "../../icons/logo.png";


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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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