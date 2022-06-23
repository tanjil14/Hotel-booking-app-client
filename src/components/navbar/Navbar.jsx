import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const handleClick = async () => {
    try {
      await axios.get("/auth/logout");
      navigate("/");
      dispatch({
        type: "LOGOUT",
      });
    } catch (err) {}
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BuriBooking</span>
        </Link>
        {user ? (
          <div className="navItems">
            <b>{user.username}</b>
            <button onClick={handleClick} className="navButton">
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register">
            <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
            <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
