import {CATCH_POKEMON} from "./actionTypes";

export function catchPokemon(id) {
    return {
        type: CATCH_POKEMON,
        id
    };
}
