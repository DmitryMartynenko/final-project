import React from "react";
import s from './PokemonList.module.css'
import GetPokemonItem from "../../PokemonOwnCard/Pokemon";
import {connect} from "react-redux";

class PokemonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonsData: [],
            caughtPokemons: {},
            paginationCounter: 12
        };
    }

    upload() {
        let counter = this.state.paginationCounter + 6;
        fetch(`http://localhost:3000/pokemons?_limit=${this.state.paginationCounter}`)
            .then(data => data.json())
            .then(data => this.setState({pokemonsData: data, paginationCounter: counter}))
    }

    componentDidMount() {
        this.upload()
    }

    render() {
        const pokemonsData = this.state.pokemonsData;
        const elements = pokemonsData.map((item) => {
            return <GetPokemonItem
                                   {...item} key={item.id}/>
        });
        return (
                <div>
                    <div> {elements} </div>

                    <button className={s.loadButton} onClick={() => {
                        this.upload();
                    }}> <p className={s.textWrapper}>Load More</p>
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
export default connect(mapStateToProps)(PokemonList);

