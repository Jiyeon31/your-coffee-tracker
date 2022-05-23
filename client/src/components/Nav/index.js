import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import coffeeBeans from '../../assets/coffee-beans.png';
import './style.css';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/success">
              Favorite List
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1 signup">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1 login">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
      <header className="bg-secondary mb-4 py-2 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <img src={coffeeBeans} style={{ width: "8%" }} alt="logo"/>
            <a href="/">
              <h1>How Coffee U bean?</h1>
            </a>
        </div>
      </header>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
