import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const initialState = { entities: {}, currentPoke: null };

const pokemonReducer = (state = initialState, action) => {
  let nextState;
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      nextState = merge({}, state);
      nextState.entities = action.pokemon;
      return nextState;
    // case RECEIVE_POKEMON:
    //   nextState = merge({});
      // add to entities
      // change out currentPoke to be pokeid and reutrn state
    default:
      return state;
  }
};

export default pokemonReducer;
