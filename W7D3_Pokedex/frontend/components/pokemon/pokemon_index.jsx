import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);

    return (
      <div>
        <section className="pokedex">
          <ul>
            {pokemonItems}
          </ul>
        </section>
      </div>
    );
  }
}

export default PokemonIndex;
