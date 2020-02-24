import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import PokemonList from "./components/Navbar/PokemonsList/PokemonList";
import CaughtPokemonsList from "./components/Navbar/CaughtPokemonsList/CaughtPokemonsList";
import {connect} from "react-redux";
import PokemonOwnMenu from "./components/PokemonOwnMenu/PokemonOwnMenu";


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Route exact path='/' render={() => <Redirect to='/pokemonList'/>}/>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>

                    <div class='app-wrapper-content'>
                                                <Route path='/pokemonList' component={PokemonList} exact/>
                        <Route path='/caught' component={CaughtPokemonsList} exact/>
                        <Route path='/pokemonList/:id'
                               render={({match}) => {
                                   const {id} = match.params;
                                   return (<React.Fragment>
                                       <PokemonOwnMenu id={id} name={'sda'} isButton={true}/>
                                   </React.Fragment>)
                               }}/>

                    </div>
                </div>
            </BrowserRouter>)
    }

}

function mapStateToProps(state) {
    return {
        caughtPokemons: state.catchPokemon.caughtPokemons
    }
}
export default connect(mapStateToProps)(App);
