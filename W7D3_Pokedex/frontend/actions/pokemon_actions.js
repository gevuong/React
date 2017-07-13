import { fetchAllPokemon } from '../util/api_util';


export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

// async action
export const requestAllPokemon = () => dispatch => {
  const promise = fetchAllPokemon();
  const callback = pokemon => dispatch(receiveAllPokemon(pokemon));
  return promise.then(callback);
};

window.requestAllPokemon = requestAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
