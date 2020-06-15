import {fetchPokeRequest,fetchPokeSuccess, fetchPokeError} from './fetchTypes'


export const fetchPokemonRedux = () =>{
    return(dispatch) => {
        dispatch(fetchPokeRequest());
        return fetchPokemon().then(([response, json]) => {
            if(response.status === 200){
                dispatch(fetchPokeSuccess(json))
            }else{
                dispatch(fetchPokeError())
            }
        })
    }
}

const randomPoke = `https://pokeapi.co/api/v2/pokemon/${Math.floor((Math.random() * 100) + 1)}`;
const pokeArr = ['https://pokeapi.co/api/v2/pokemon/7/', 'https://pokeapi.co/api/v2/pokemon/4/', 'https://pokeapi.co/api/v2/pokemon/1/'];

const fetchPokemon = (url) => {
    return fetch(url, {method: 'GET'})
            .then(response => Promise.all([response, response.json()]))
}

pokeArr.forEach(poke => {
    fetchPokemon(poke);
})

