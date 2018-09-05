import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import Conversas from './Conversas';
import Contatos from './Contatos';
import TabBarMenu from './TabBarMenu';


export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Conversas' },
      { key: 'second', title: 'Contatos' },
    ],
  };
  _renderHeader = props => <TabBarMenu {...props}/>
  render() {
    return (
      
      <TabView
        navigationState={this.state}
        renderTabBar={this._renderHeader}
        renderScene={SceneMap({
          first: Conversas,
          second: Contatos,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

