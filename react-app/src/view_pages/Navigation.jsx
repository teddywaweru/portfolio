import "../styles/App.css";
import { Link } from "react-router-dom";
import React from "react";



class Navigation extends React.Component {
  render() {
    return(
      <div
      className="flex">
        <nav>
          <ul className=" bg-blue-400 text-white text-3xl text-left">
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;