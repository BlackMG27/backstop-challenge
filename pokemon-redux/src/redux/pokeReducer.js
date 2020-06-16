import {fetchPokeRequest,fetchPokeSuccess} from './fetchTypes'

export const pokeReducer = (state = {}, action) => {
    switch(action.type){
        case fetchPokeRequest.FETCH_REQUEST:
            return state;
        case fetchPokeSuccess.FETCH_SUCCESS:
            return {...state, pokemon: action.payload};
        default:
            return state;
    }
}

