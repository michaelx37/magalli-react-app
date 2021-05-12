import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';
import './Toolbar.css';

const Toolbar = () => {
    return (
        <header className="toolbar">
            <Link to='/' className={"header__logo"}><Logo /></Link>
            <nav className="navbar">
                <ul className="navbar__links">
                    <li className="navbar__link">
                        <NavLink to='/' className={"link"} activeClassName="active" exact>Home</NavLink>
                    </li>
                    <li className="navbar__link">
                        <NavLink to='/news' className={"link"} activeClassName="active" exact>News</NavLink>
                    </li>
                    <li className="navbar__link">
                        <NavLink to='/blog' className={"link"} activeClassName="active" exact>Blog</NavLink>
                    </li>
                    <li className="navbar__link">
                        <NavLink to='/about-us' className={"link"} activeClassName="active" exact>About us</NavLink>
                    </li>
                    <li className="navbar__link">
                        <NavLink to='/auth' className={"link"} exact>Account</NavLink>
                    </li>
                </ul>
            </nav>
            {/*
            <div className="searchbar">
                <input type='text' />
                <button>Search</button>
            </div><div className="profile">
                <div>Register</div>
                <div>Log In</div>
            </div>
            */}
        </header>
    );
}

export default Toolbar;