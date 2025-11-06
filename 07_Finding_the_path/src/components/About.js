import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>

        <User name={"Akshay Saini (function)"} />
        {/**we're creating 2 different instances of the same class */}
        <UserClass name={"Akshay Saini (Class)"} location={"Dehradun Class"} />
        <UserClass name={"Harkirat Singh"} place={"Bangalore"}/>
      </div>
    );
  }
}

export default About;
