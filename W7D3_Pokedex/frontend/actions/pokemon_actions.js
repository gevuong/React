import { fetchAllPokemon, fetchPokemon } from '../util/api_util';


export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = poke => ({
  type: RECEIVE_POKEMON,
  poke
});

// async action
export const requestAllPokemon = () => dispatch => {
  const promise = fetchAllPokemon();
  const callback = pokemon => dispatch(receiveAllPokemon(pokemon));
  return promise.then(callback);
};
//
export const requestPokemon = () => dispatch => {
  const promise = fetchPokemon();
  const callback = poke => dispatch(receivePokemon(poke));
  return promise.then(callback);
};

window.requestAllPokemon = requestAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
