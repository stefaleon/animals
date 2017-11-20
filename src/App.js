import React, { Component } from 'react';
import { Text,  View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import AnimalsList from './components/AnimalsList';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={createStore(reducers)} >
        <View style={{ flex:1 }}>
          <Header headerText="Animals" />
          <AnimalsList />
          <Text>
            The animals are now coming from the Redux store to the React View.
          </Text>
        </View>
      </Provider>
    );
  }
}
