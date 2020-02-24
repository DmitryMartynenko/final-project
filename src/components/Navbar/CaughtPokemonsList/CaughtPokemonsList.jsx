import React from "react";
import GetPokemonItem from "../../PokemonOwnCard/Pokemon";
import {connect} from "react-redux";
import s from "./CaughtPokemonsList.module.css";


class CaughtPokemonsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonsData: [],
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
        let filterStringToNumber = filter.map(function (num) {
            return parseInt(num, 10)
        });
        let sortResult = [];
        sortResult = data.filter(el => filterStringToNumber.includes(el.id));
        return sortResult;
    }

    render() {
        const pokemonsData = this.sortData();
        const caughtElements = pokemonsData.map((item) => {
            return <GetPokemonItem props={this.props.caughtPokemons}
                                   {...item} key={item.id}/>
        });


        return (
            <div>
                <div><h1 className={s.headline}>YOU ALREADY CAUGHT:</h1></div>
                {caughtElements}
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
