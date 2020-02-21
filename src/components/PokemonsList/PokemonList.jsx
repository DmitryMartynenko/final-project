import React from "react";
import s from './PokemonList.module.css'
import GetPokemonItem from "../Pokemon/Pokemon";
import {connect} from "react-redux";

class PokemonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonsData: [],
            caughtPokemons: {},
            paginationCounter: 10
        };
    }

    upload() {
        let counter = this.state.paginationCounter + 5;
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
            return <GetPokemonItem zhopa={this.props.caughtPokemons}
                                   {...item} key={item.id} id={item.id}/>
        });
        {/*const pokemonNodes = pokemonsData.map(({id, name}) => <getPokemonItem props={pokemonsData}/>(id, name));*/
        }

        return (
            <div>
                <div>
                    <div> {elements} </div>
                    {/*{pokemonNodes}*/}
                    <button className={s.loadButton} onClick={() => {
                        // this.pagination();
                        this.upload();
                    }}> Load More
                    </button>
                </div>
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

