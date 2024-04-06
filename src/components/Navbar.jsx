import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <img src={logo} alt="Logo" />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">
        <FontAwesomeIcon icon="fa-cart-shopping" />
      </NavLink>
    </div>
  );
}
