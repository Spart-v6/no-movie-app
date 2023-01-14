import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar">
            <Link to="/"> NoMovie </Link>
            <Link to="/movies/popular"> Popular </Link>
            <Link to="/movies/top_rated"> Top rated </Link>
            <Link to="/movies/upcoming"> Upcoming </Link>
        </div>
    </div>
  );
};

export default Navbar;
