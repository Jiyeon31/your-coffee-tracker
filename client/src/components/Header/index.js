import React from 'react';
import { Link } from 'react-router-dom';
import coffeeBeans from '../../assets/logo/coffee-beans.png';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <img src={coffeeBeans} style={{ width: "5%" }} alt="logo"/>
          <Link to="/">
            <h1>How Coffee U bean?</h1>
          </Link>
 
        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link className="nav-link" to="/create">
                Create Review
              </Link>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

