import {useState } from "react";
import LOGO_URL from "../../icons/FEAST_FLEET.svg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {



  // let btnName = "Login"
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
    return (
      <div className="header px-20 py-2 flex justify-between items-center shadow-lg text-lg font-poppins">
        <div className="logo-container">
          <a href="/"> 
          {/* <img src={LOGO_URL} alt="logo" className="w-15"/> */}
          <img width="96" height="96" 
          
          src={LOGO_URL}
          
          // src="https://img.icons8.com/fluency/96/pizza-delivery.png" 
          
          
          alt="pizza-delivery"/>
          </a>
        </div>
        <div className="nav-items">
          <ul className="flex items-center">
            <li className="m-1 p-1">{onlineStatus?'✅ Online' : '❌ Disconnected'}</li>
            <li className="m-1 p-1"><Link to="/"> Home </Link> </li>
            <li className="m-1 p-1"><Link to = "/about">About Us</Link></li>
            <li className="m-1 p-1"><Link to = "/contact">Contact Us</Link></li>
            <li className="m-1 p-1"><Link to = "/grocery">Grocery</Link></li>

            <li className="m-1 p-1">Cart </li>
            <button className="login-btn" 
            onClick={()=>{
              btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
            }}>{btnName}</button>

          </ul>
        </div>
      </div>
    );
  };

export default Header;
