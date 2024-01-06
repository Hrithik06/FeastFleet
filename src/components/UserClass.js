import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dummy",
      location: "Dummy",
    };
    console.log(this.props.name + " Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " Did Mount");
    const data = await fetch("https://api.github.com/users/hrithik06");

    const json = await data.json();
    const { name, location, avatar_url } = json;
    this.setState({
      name: name,
      location: location,
      avatar_url: avatar_url,
    });
  }

  componentDidUpdate() {
    console.log(this.props.name + " Did Update");
  }
  componentWillUnmount() {
    console.log(this.props.name + " Did Unmount");
  }

  render() {
    // console.log(this.props.name+ " Render")

    const { name, location, avatar_url } = this.state;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="" className="w-52 rounded-full" />
        <h2 className="font-bold text-3xl">{name}</h2>
        <h3 className="text-2xl">{location}</h3>
        <h4 className="text-2xl">{"Find me @hrithik"}</h4>
      </div>
    );
  }
}
export default UserClass;
