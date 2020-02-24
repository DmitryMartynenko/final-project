import {CATCH_POKEMON} from "./actionTypes";

export function catchPokemon(id,date) {

    return {
        type: CATCH_POKEMON,
        id,
        date
    };
}
