import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Rotas from './src/Rotas';
import reducers from './src/reducers';


export default class App extends React.Component {
  
  componentWillMount(){
    let config = {
      apiKey: "AIzaSyB7HCdybGA8Qpozzqdh_9gbwcC3M6KCocI",
      authDomain: "mensageiro-18bba.firebaseapp.com",
      databaseURL: "https://mensageiro-18bba.firebaseio.com",
      projectId: "mensageiro-18bba",
      storageBucket: "mensageiro-18bba.appspot.com",
      messagingSenderId: "334382886188"
    };
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <Provider  store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <Rotas/>
      </Provider>
      
    );
  }
}

