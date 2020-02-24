import React from "react";
import {connect} from "react-redux";
import s from "./PokemonOwnMenu.module.css";
import GetPokemonItem from "../PokemonOwnCard/Pokemon";
import {NavLink} from "react-router-dom";

class PokemonOwnMenu extends React.Component {
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

    render() {
        const pokemonsData = this.state.pokemonsData.filter(el => el.id == this.props.id);
        const caughtElements = pokemonsData.map((item) => {
            return <GetPokemonItem props={this.props.pokemonsData} isOwnCard={true}
                                   {...item} key={item.id}/>
        });

        return (
            <div>
                <div><h1 className={s.headline}>HI, ITS CARD OF:</h1></div>
                <NavLink to={`/pokemonList/`}>
                    <div className={s.button}>
                            {this.props.isButton && <p className={s.buttonText}>
                                Back
                            </p>}
                    </div>
                </NavLink>
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

export default connect(mapStateToProps)(PokemonOwnMenu);
