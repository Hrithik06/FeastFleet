import React, { useEffect } from "react";
import { useState } from "react";

const User = (props) => {
  const { name, location } = props;
  const [count] = useState(0);
  const [count2] = useState(2);

  // useEffect( async()=>{
  //   setInterval(()=>{
  //     console.log("SetInterval")

  //   },1000)
  // },[])

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h4>{"Find me @hrithik"}</h4>
    </div>
  );
};
export default User;
