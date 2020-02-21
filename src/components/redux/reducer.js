import {CATCH_POKEMON} from "./actionTypes";
import connect from "react-redux/lib/connect/connect";

const initialState = {
    caughtPokemons: []
};

function pokemonsReducer(state = initialState, action) {

        switch (action.type) {
        case CATCH_POKEMON: {
            return {
                ...state,
                caughtPokemons: [...state.caughtPokemons, action.id]
            };
        }
        default:
            return state;
    }

}

export default pokemonsReducer
