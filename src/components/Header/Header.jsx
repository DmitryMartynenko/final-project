import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>

        <img src = 'https://pngimg.com/uploads/pokeball/pokeball_PNG22.png' />
            <h1 className="main-title">pokedex</h1>
        </header>
)
}

export default Header;
