import s from "./Pokemon.module.css";
import {NavLink} from "react-router-dom";
import PokemonStatus from "../PokemonCaughtBtn/PokemonCaughtBtn";
import React from "react";
import {connect} from "react-redux";

const GetPokemonItem = ({id, name, isButton, caughtPokemons, dateCaughtPokemons, isOwnCard}) => {

    const sortData = () => {
        if (isOwnCard) {    // checking if isOnwCard in props === true
            let dataCaught = dateCaughtPokemons;
            let sortResult = [];
            sortResult = dataCaught.filter(el => el.id === id); // put the one pokemon (in to array) depends on clicked id
            if (sortResult[0] != undefined) { //if this array is not empty
                return sortResult[0].date
            } else {
                return "status: free"
            }
        } else {
            return ""
        }
    };

    return (
        <div className={s.cardWrapper}>
            <div>
                <NavLink className={s.button} to={`/pokemonList/`}>
                    {isButton && <button>
                        Back
                    </button>}
                </NavLink>
            </div>
            <div>
                {<p className={s.statusWrapper}> {`${sortData()}`} </p>}
            </div>
            <div className={s.nameWrapper}><p className={s.name}>{name}</p></div>
            <NavLink to={`/pokemonList/${id}`}>
                <img alt={'pokemon'} className={s.imgWrapper} src={`${process.env.PUBLIC_URL}/pokemons/${id}.png`}/>
            </NavLink>

            <div className={s.id}><p>{`№${id}`}</p></div>
            <PokemonStatus id={id}/>
        </div>)
};

function mapStateToProps(state) {
    return {
        caughtPokemons: state.catchPokemon.caughtPokemons,
        dateCaughtPokemons: state.catchPokemon.dateCaughtPokemons,
    }
}

export default connect(mapStateToProps)(GetPokemonItem);

