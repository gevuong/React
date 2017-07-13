// anywhere we use JSX, we must import React

import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
// Root is a stateless component (i.e. a functional component)
const Root = ({ store }) => (
  <Provider store={store}>
    <div>Hello, world!
      <PokemonIndexContainer />
    </div>
  </Provider>
);

export default Root;
