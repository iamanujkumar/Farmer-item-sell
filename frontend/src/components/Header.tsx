import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div>
      {/* Render Navbar here */}
      <Navbar />

      {/* Additional content for the header */}
      <div className="container mx-auto flex justify-between">
        {/* <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Farmers</Link>
        </span> */}
      </div>
    </div>
  );
};

export default Header;
