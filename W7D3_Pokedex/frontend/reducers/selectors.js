export const selectAllPokemon = state => {
  return Object.keys(state.pokemon).map(poke_id => state.pokemon[poke_id]);

};

window.selectAllPokemon = selectAllPokemon;
