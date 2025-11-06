import React from "react";

class UserClass extends React.Component {
  // render method
  constructor(props) {
    super(props);

    //state variable
    //state is a big object that will contain all
    //the state variables
    this.state = {
      count: 0,
      count1: 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
      }
    };
    console.log("Child Constructor");
  }

  async componentDidMount(){
    console.log(this.props.name+" Child Component did mount");
    // Api call then re-render the component

    const data = await fetch("https://api.github.com/users/anamiikkkaaaa");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentWillUnmount(){
    console.log("component will unmount");
  }

  render() {
    const { place } = this.props;
    const { count, count2 } = this.state;

    console.log("Child Render");
    const {name, location} = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h1>Location: {location}</h1>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
           //this is wronggggg
           //Never update state variables directly
           // this.state.count = this.state.count + 1;
           this.setState({
            count: this.state.count+1,
           })
          }}
        >
          Count Increase
        </button>
        <h1>Count1: {count}</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {place}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;
