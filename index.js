import {AppRegistry} from 'react-native';
import App from './src/App';
import React, {Component} from 'react';
import {name as appName} from './app.json';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/GlobleState/reducers';

class pro extends Component {
  render() {
    return (
      <>
        <Provider store={createStore(reducers)}>
          <App />
        </Provider>
      </>
    );
  }
}

AppRegistry.registerComponent(appName, () => pro);
