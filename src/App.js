import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import PokemonList from "./components/PokemonsList/PokemonList";
import GetPokemonItem from "./components/Pokemon/Pokemon";
import CaughtPokemonsList from "./components/CaughtPokemonsList/CaughtPokemonsList";
import {connect} from "react-redux";
import PokemonStatus from "./components/Сaught/CaughtPokemons";


// const App = (props) => {

class App extends Component{

    render(){

        return (
            <BrowserRouter>
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
                                       <GetPokemonItem id={id} isButton={true} />
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
