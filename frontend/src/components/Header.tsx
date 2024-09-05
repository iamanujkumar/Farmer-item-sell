import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import { FaUserCircle } from "react-icons/fa";
import Navbar from "./Navbar/Navbar";
const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Navbar/>
          <Link to="/">Farmers</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="text-gray text-3xl hover:text-gray-300">
                <FaUserCircle /> 
              </Link>
              {/* add items field here */}
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white items-center text-green-500 px-3 font-bold hover:bg-gray-100 text-xl rounded-lg shadow-md transition duration-300 ease-in-out hover:text-pink-400 "
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;