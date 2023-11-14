import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import DataContext from '../helpers/DataContext';

const Navbar = ({logout}) => {

  const { currentUser } = useContext(DataContext);

  function loggedInNav() {
    return (
      <nav className="navbar">
        <div className="logo-box">
          <NavLink className="logo" to="/">JOBLY</NavLink>
        </div>
        <div className="link-box">
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/signin" onClick={logout}>Log out {currentUser.firstName}</NavLink>
        </div>
      </nav>
    )
  }

  function loggedOutNav() {
    return (
    <nav className="navbar">
      <div className="logo-box">
        <NavLink className="logo" to="/">JOBLY</NavLink>
      </div>
      <div className="link-box">
        <NavLink to="/signup">Sign up</NavLink>
        <NavLink to="/signin">Log in</NavLink>
      </div>
    </nav>
    )
  }


  return (
    <>
      {
        currentUser ? loggedInNav() : loggedOutNav()
      }
    </>
  )
}

export default Navbar;