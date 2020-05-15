import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import {connect} from 'react-redux';
import History from './History';
import * as screen_1 from '../../GlobleState/actions/screen_1';
import * as screen_3 from '../../GlobleState/actions/screen_3';
import * as screen_4 from '../../GlobleState/actions/screen_4';
import ViewHistory from './ViewHistory';

class Index extends Component {
  UNSAFE_componentWillMount() {
    this.props.screen_4ChangeActivation(false);
    BackHandler.addEventListener('hardwareBackPress', () => this.back());
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => this.back());
  }

  back() {
    this.props.screen_3ChangeActivation(false);
    this.props.screen_1ChangeActivation(true);
    return true;
  }
  render() {
    return (
      <>
        {this.props.screen_3.change1 === 'history' ? (
          <History />
        ) : (
          <ViewHistory />
        )}
      </>
    );
  }
}

export default connect(
  state => state,
  {...screen_3, ...screen_1, ...screen_4},
)(Index);
