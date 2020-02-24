import {CATCH_POKEMON} from "./actionTypes";

const initialState = {
    caughtPokemons: [],
    dateCaughtPokemons: []

};

function pokemonsReducer(state = initialState, action) {

    switch (action.type) {
        case CATCH_POKEMON: {
            return {
                ...state,
                caughtPokemons: [...state.caughtPokemons, action.id],
                dateCaughtPokemons: [...state.dateCaughtPokemons, action.date]
            };
        }
        default:
            return state;
    }

}

export default pokemonsReducer
