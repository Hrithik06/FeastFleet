import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
// const About = () => {
//     return (
//       <div className="About">
//         <h1>About Us</h1>
//         {/* <User name={"Hrithik"} location={"India"}/> */}
//         <UserClass name={"Hrithik"} location={"India"}/>

//       </div>
//     );
//   };

//Class Based COmponent

class About extends Component {
  constructor(props) {
    super(props)
    console.log("Parent Constructor");
  }
  componentDidMount(){
    console.log("Parent Did Mount")
    
  }
  //never called bcux not updated only child is updating
  componentDidUpdate(){
    console.log("Parent Did Update")

  }
  

  render() {
    console.log("Parent Render");

    return (
      <div className="About">
        <h1>About Us</h1>
        {/* <User name={"Hrithik"} location={"India"}/> */}
        <UserClass name={"First"} location={"India"} />
      </div>
    );
  }
}

export default About;
