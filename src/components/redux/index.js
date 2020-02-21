import {combineReducers} from "redux";
import pokemonsReducer from "./reducer";


const rootReducer = combineReducers({
    catchPokemon:pokemonsReducer
});

export default rootReducer
