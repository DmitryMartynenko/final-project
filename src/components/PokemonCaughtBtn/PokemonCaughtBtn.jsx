import React, {Component} from "react";
import {catchPokemon} from "../redux/actions";
import s from './PokemonCaughtBtn.module.css'
import {connect} from "react-redux";
class PokemonCaughtBtn extends React.Component {

    caughtDate = () => {
        let Data = new Date();
        let Year = Data.getFullYear();
        let Month = Data.getMonth();
        let Day = Data.getDate();
        let Hour = Data.getHours();
        let Minutes = Data.getMinutes();
        let Seconds = Data.getSeconds();
        return (`Was caught at ${Day}.${Month + 1}.${Year} time: ${Hour}:${Minutes}:${Seconds}`)
    };

    render() {
        const idClicked = parseInt(this.props.id,10);
        const arrayClicked = this.props.caughtPokemons;
        const dateOfClick = this.caughtDate();
        const ArrayDatesOfClick = {
            id:idClicked,
            date:dateOfClick};

        return (
            <div>
                <button className={s.button}
                        disabled={arrayClicked.some(id => id === idClicked)}
                        onClick={event =>(this.props.catchPokemon(idClicked,ArrayDatesOfClick))}> catch him
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        caughtPokemons: state.catchPokemon.caughtPokemons
    }
}
export default connect(mapStateToProps, {catchPokemon})(PokemonCaughtBtn);



