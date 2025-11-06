import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";

try {
  const AppLayout = () => {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  };

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(<AppLayout />);
} catch (err) {
  console.log(err);
}
