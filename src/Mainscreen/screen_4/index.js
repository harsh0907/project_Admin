import React, {Component} from 'react';
import {StyleSheet, View, BackHandler} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class App extends Component {
  UNSAFE_componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () =>
      BackHandler.exitApp(),
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () =>
      BackHandler.exitApp(),
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={true}
          textContent={'   Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
