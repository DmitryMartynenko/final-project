import React from "react";
import GetPokemonItem from "../Pokemon/Pokemon";
import {connect} from "react-redux";


class CaughtPokemonsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonsData: [],
            caughtPokemons: [1, 2, 3],
        };
    }

    upload() {


        fetch(`http://localhost:3000/pokemons`)
            .then(data => data.json())
            .then(data => this.setState({pokemonsData: data}))

    }

    componentDidMount() {
        this.upload()
    }

    sortData(data, filter) {
        data = this.state.pokemonsData;
        filter = this.props.caughtPokemons;
        let sortResult = [];
        sortResult = data.filter(el => filter.includes(el.id));
        return sortResult;
    }

    render() {
        console.log("caughtPokemons", this.state.pokemonsData);
        // console.log("caughtPokemons", this.store.state.pokemonsData);
        console.log("SORTED", this.sortData());


        const pokemonsData = this.sortData();
        const elements = pokemonsData.map((item) => {
            return <GetPokemonItem c {...item} key={item.id} id={item.id}/>
        });
        {/*const pokemonNodes = pokemonsData.map(({id, name}) => <getPokemonItem props={pokemonsData}/>(id, name));*/
        }
        return (
            <div>
                <div>
                    <div> {elements} </div>
                    {/*{pokemonNodes}*/}

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

export default connect(mapStateToProps)(CaughtPokemonsList);
