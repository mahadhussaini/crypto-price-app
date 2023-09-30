import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon from react-icons
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <FaShoppingCart size={32} /> {/* Use the shopping cart icon */}
        </Link>
      </div>
    </div>
  );
};
