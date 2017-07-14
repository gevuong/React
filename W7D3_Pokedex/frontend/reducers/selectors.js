export const selectAllPokemon = state => {
  return Object.keys(state.pokemon.entities).map(poke_id => state.pokemon.entities[poke_id]);

};

window.selectAllPokemon = selectAllPokemon;
