import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom"; // s = class


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <duv className={s.navPosition}>
                <div className={s.item}>
                    <NavLink to='/pokemonList' activeClassName={s.activeLink}>pokedex</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/caught' activeClassName={s.activeLink}> caught</NavLink>
                </div>
            </duv>
        </nav>
    )
};

export default Navbar;
