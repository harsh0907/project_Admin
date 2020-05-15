/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import * as history from '../../GlobleStates/actions/history';
import {connect} from 'react-redux';

class Password extends Component {
  state = {password: '', error2: 0};

  onSubmiit() {
    this.setState({password: ''});
    if (this.state.password === this.props.screen_2.password) {
      this.props.profile_Change(1);
    } else {
      this.setState({error2: 1});
    }
  }
  render() {
    const {net} = this.props.netconnect;
    return (
      <View style={{padding: 100, backgroundColor: '#FFCDD2', flex: 1}}>
        <View style={styles.container}>
          <View style={styles.inputcontainer}>
            <TextInput
              style={[styles.inputs, {marginBottom: 7}]}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={res => this.setState({password: res})}
            />
          </View>
          {this.state.error2 === 1 ? (
            <View style={{marginTop: 30}}>
              <Text style={{fontSize: 15, color: 'red'}}>
                Incorrect Password
              </Text>
            </View>
          ) : (
            <View />
          )}
          <TouchableOpacity
            style={styles.buttoncontainner}
            onPress={() => (!net ? {} : this.onSubmiit())}>
            <Text style={styles.submitbutton}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#FFCDD2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorcontainer: {
    marginTop: 6,
  },
  inputcontainer: {
    width: 300,
    height: 60,
    backgroundColor: '#E57373',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 40,
    elevation: 20,
  },
  buttoncontainner: {
    backgroundColor: '#E57373',
    padding: 20,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 40,
    elevation: 20,
    marginBottom: 2,
  },
  submitbutton: {
    fontSize: 20,
    color: '#fff',
  },
  inputs: {
    fontSize: 22,
  },
};

export default connect(
  state => state,
  history,
)(Password);
