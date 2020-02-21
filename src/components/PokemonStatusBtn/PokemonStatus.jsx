import React, {Component} from "react";
import {catchPokemon} from "../redux/actions";
import s from './PokemonStatus.module.css'
import Provider from "react-redux/lib/components/Provider";
import store from "../redux/store";
import {connect} from "react-redux";



class PokemonStatus extends Component{
    render(){

    // const pokemonCaught = catchPokemon.some(pokeId => pokeId === id)
        console.log("THIS PROPS",this.props)
     const idClicked = this.props.id;
     const arrayClicked = this.props.caughtPokemons
        console.log("IDPOK", idClicked)


    return (
        <div>
                <button className={s.button}
                    // disabled={props.caughtPokemons.some(id => id === 1)}
                    disabled={arrayClicked.some(id => id == idClicked)}
                    onClick={event => (this.props.catchPokemon(idClicked))}> catch him
                </button>
        </div>
    )}
};


function mapStateToProps(state) {

    return {
        caughtPokemons: state.catchPokemon.caughtPokemons
    }
}

export default connect(mapStateToProps,{catchPokemon})(PokemonStatus);



