//import { Link } from 'react-router-dom';


  const Header = () => {
  return (
    <div>
      <img
        src="https://www.byteknightdesigns.net/wp-content/uploads/2019/03/delicious-restaurant-logo-design-template-ld009.jpg"
        alt="logo"
        className="logo"
      ></img>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact Us</a>
      <a href="/">Cart</a>
      <button className = "login">login</button>
    </div>
  );
};


export default Header;
