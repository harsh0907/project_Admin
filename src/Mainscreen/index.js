import React, {Component} from 'react';
import Screen_1 from './screen_1/index';
import Screen_2 from './screen_2/index';
import Screen_4 from './screen_4/index';
import Screen_3 from './screen_3/index';
import {connect} from 'react-redux';

class Mainscreen extends Component {
  render() {
    return (
      <>
        {this.props.screen_1.activation ? <Screen_1 /> : <></>}
        {this.props.screen_2.activation ? <Screen_2 /> : <></>}
        {this.props.screen_3.activation ? <Screen_3 /> : <></>}
        {this.props.screen_4.activation ? <Screen_4 /> : <></>}
      </>
    );
  }
}

export default connect(state => state)(Mainscreen);
