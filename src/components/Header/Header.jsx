import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import css from "./Header.module.css"; 
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setOpen(!open);
    console.log("Menu is now", open ? "open" : "closed");
  };

  return (
    <header>
      <nav className={`${css.header_nav} ${open ? css.active : ""}`}>
        <ul className={css.itemNav}>
          <li>
            <NavLink to="/" className={location.pathname === "/" ? css.active : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={location.pathname === "/blog" ? css.active : ""}>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/works" className={location.pathname === "/works" ? css.active : ""}>Works</NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={location.pathname === "/contact" ? css.active : ""}>Contact</NavLink>
          </li>
        </ul>
      </nav>
      <button className={css.headerBtn} onClick={toggleMenu}>
        <IoMenu />
      </button>
    </header>
  );
};

export default Header;

