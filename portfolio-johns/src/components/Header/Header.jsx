import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css"; // Убедитесь, что правильно импортировали файл со стилями
import { IoMenu } from "react-icons/io5";



const Header = () => {
    const [open, setOpen] = useState(false);
  
    const toggleMenu = () => {
      setOpen(!open);
      console.log('Menu is now', open ? 'open' : 'closed');
    };
  
    return (
      <header>
        <nav className={`${css.header_nav} ${open ? css.active : ''}`}>
          <ul className={css.itemNav}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/works'>Works</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </nav>
        <button className={css.headerBtn} onClick={toggleMenu}>
          <IoMenu />
        </button>
      </header>
    );
  };
  
  export default Header;
