import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div>
      {/* Render Navbar here */}
      <Navbar />

      {/* Additional content for the header */}
      <div className="container mx-auto flex justify-between">
      </div>
    </div>
  );
};

export default Header;
