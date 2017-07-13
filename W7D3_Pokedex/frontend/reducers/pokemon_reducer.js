import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  let nextState;
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      // nextState = {};
      // action.pokemon.forEach(poke => { nextState[poke.id] = poke; } );
      // return nextState;
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonReducer;
