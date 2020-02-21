import s from "./Pokemon.module.css";
import {NavLink} from "react-router-dom";
import PokemonStatus from "../PokemonStatusBtn/PokemonStatus";
import React from "react";
import Provider from "react-redux/lib/components/Provider";
import store from "../redux/store";
import {connect} from "react-redux";


const GetPokemonItem = ({id, name, isButton}) => {
    let path = '/pokemonList/' + id;

    return (
        <div className={s.cardWrapper}>
            <NavLink to={`/pokemonList/${id}`}>
                <div>
                    <NavLink className={s.button} to={`/pokemonList/`}>
                        {isButton && <button>
                            Back to list
                        </button>}
                    </NavLink>
                </div>
                <div className={s.nameWrapper}><p className={s.name}>{name}</p></div>
                <img className={s.imgWrapper} src={`${process.env.PUBLIC_URL}/pokemons/${id}.png`}></img>
            </NavLink>

            <div className={s.id}>{`№${id}`} </div>

                <PokemonStatus id={id}/>



        </div>)
};





export default GetPokemonItem;
