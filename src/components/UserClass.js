import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
  }

  render() {
    const { name, location } = this.props;

    // const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h1>Count = {this.state.count}</h1>
        <button
          onClick={() => {
            // console.log("hi")
            this.setState({
              count: this.state.count + 1,
            })

          }}
        >
          Update Count
        </button>
        {/* <h1>Count2 = {count2}</h1> */}

        <h2>{name}(class)</h2>
        <h3>{location}</h3>
        <h4>{"Find me @hrithik"}</h4>
      </div>
    );
  }
}
export default UserClass;
