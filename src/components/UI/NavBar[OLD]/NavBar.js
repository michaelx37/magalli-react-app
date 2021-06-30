import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import ProfileAvatar from "./NavBarProfile";
import classes from "./NavBar.module.css";
import menu from "../../../config/config";
import Button from "@material-ui/core/Button";

const NavBar = () => {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.header__logo}>
        <Logo />
      </Link>
      <nav>
        <ul style={{display:'flex', listStyle:'none', marginTop:'5rem'}}>
          {menu.map((item, index) => (
            <li style={{marginRight:'1rem'}} key={index}>
              <Button color='primary' variant='contained'>
                <NavLink
                  to={item.link}
                  className={classes.link}
                  exact
                >{item.text}</NavLink>
              </Button>
            </li>
          ))}
          <ProfileAvatar />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
