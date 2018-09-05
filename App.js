import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Rotas from './src/Rotas';
import reducers from './src/reducers';


export default class App extends React.Component {
  render() {
    return (
      <Provider  store={createStore(reducers)}>
        <Rotas/>
      </Provider>
    );
  }
}

