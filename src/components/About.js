import User from "./User"
import UserClass from "./UserClass";
const About = () => {
    return (
      <div className="About">
        <h1>About Us</h1>
        {/* <User name={"Hrithik"} location={"India"}/> */}
        <UserClass name={"Hrithik"} location={"India"}/>

      </div>
    );
  };
  
  export default About;