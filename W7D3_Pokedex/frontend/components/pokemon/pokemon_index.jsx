import React from 'react';

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
    console.log(this.props);
    return (
      <ul>
        {pokemon.map(poke => (
          <div key={poke.id}>
            <li>{poke.name}</li>
            <img src={poke.image_url} />
          </div>
        ))}
      </ul>
    );
  }
}

export default PokemonIndex;
