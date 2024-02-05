import React, { useState } from "react";
import { Links, Logo, NavbarItems, Navv, Hamburger } from "./Navbar.style";
import { menuIcon } from "../../helper/iconData";

const Navbar = ({ currentUser, setCurrentUser }) => {
  const [showMenu, setShowMenu] = useState(false);
  const logout = () => {
    setCurrentUser(false);
    sessionStorage.clear();
  };
  return (
    <Navv justify="space-between" wrap="wrap">
      <Logo to="/">books</Logo>
      <Hamburger onClick={() => setShowMenu(!showMenu)}>{menuIcon}</Hamburger>
      <NavbarItems showMenu={showMenu}>
        <Links to="/">Home</Links>
        <Links to="/about">About</Links>

        {currentUser ? (
          <Links to="/login" onClick={logout}>
            Logout
          </Links>
        ) : (
          <>
            <Links to="/register">Register</Links>
            <Links to="/login">Login</Links>
          </>
        )}
      </NavbarItems>
    </Navv>
  );
};

export default Navbar;
