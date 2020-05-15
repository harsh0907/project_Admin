/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  BackHandler,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import * as screen_2 from '../../GlobleState/actions/screen_2';
import * as screen_1 from '../../GlobleState/actions/screen_1';
import * as screen_3 from '../../GlobleState/actions/screen_3';
import * as screen_4 from '../../GlobleState/actions/screen_4';
import axios from 'axios';

class Screen_1 extends Component {
  UNSAFE_componentWillMount() {
    const req = async () => {
      this.props.screen_4ChangeActivation(true);
      const {url} = this.props.important_data;
      var uri = `${url}/showprice`;
      axios({
        method: 'post',
        url: uri,
        data: {},
      }).then(res => {
        this.props.screen_1PriceChange(res.data[0]);
      });

      uri = `${url}/mecha`;

      axios({
        method: 'post',
        url: uri,
        data: {},
      }).then(res => {
        this.props.screen_1SetMecha(res.data);
      });

      uri = `${url}/customer`;

      axios({
        method: 'post',
        url: uri,
        data: {},
      }).then(res => {
        this.props.screen_1SetCust(res.data);
      });
      return true;
    };

    req().then(() => this.props.screen_4ChangeActivation(false));

    BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
    });
  }

  onLogout() {
    this.props.screen_2setChange('only');
    this.props.screen_1ChangeActivation(false);
    this.props.screen_2ChangeActivation(true);
  }

  onLogoutAll() {
    this.props.screen_2setChange('all');
    this.props.screen_1ChangeActivation(false);
    this.props.screen_2ChangeActivation(true);
  }

  onCreateMecha() {
    this.props.screen_2setChange('new');
    this.props.screen_1ChangeActivation(false);
    this.props.screen_2ChangeActivation(true);
  }

  onShowMecha() {
    this.props.screen_1ChangeActivation(false);
    this.props.screen_3ChangeActivation(true);
  }

  onSetting() {
    const {pricechange, price} = this.props.screen_1;
    const {url} = this.props.important_data;
    const uri = `${url}/changeprice`;
    if (pricechange === 1) {
      axios({
        method: 'post',
        url: uri,
        data: {
          price,
        },
      });
    }
    this.props.screen_1ShowPriceChange((pricechange + 1) % 2);
  }

  render() {
    const net = false;
    const {price, mecha, cust} = this.props.screen_1;
    return (
      <View>
        <View style={styles.maincontainer}>
          <View style={styles.Toptopbarcontainer}>
            <View>
              <Text style={styles.Toptopbarcontainertext}>
                {`Customers ${cust.length}`}
              </Text>
            </View>

            <View>
              <Text style={styles.Toptopbarcontainertext}>
                {`Mechanics ${mecha.length}`}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.priceContainer}
              onPress={() => this.onSetting()}>
              {this.props.screen_1.pricechange === 0 ? (
                <Text
                  style={styles.Toptopbarcontainertext}>{`₹ ${price}`}</Text>
              ) : (
                <TextInput
                  style={{fontSize: 30}}
                  placeholder="Fee"
                  keyboardType="number-pad"
                  underlineColorAndroid="transparent"
                  value={price.toString()}
                  onChangeText={this.props.screen_1PriceChange}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomnaincontainer}>
          <View style={styles.topContainer}>
            <TouchableOpacity
              style={[
                styles.imagecontainer,
                {
                  marginRight: 50,
                  marginBottom: 10,
                  backgroundColor: '#99A3A4',
                  width: 80,
                  height: 80,
                },
              ]}
              onPress={() => (!net ? this.onShowMecha() : {})}>
              <Image
                style={[styles.image, {width: 50, height: 50}]}
                source={require('./icons/view.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.imagecontainer,
                {
                  marginLeft: 50,
                  marginBottom: 10,
                  backgroundColor: '#99A3A4',
                  width: 80,
                  height: 80,
                },
              ]}
              onPress={() => (!net ? this.onCreateMecha() : {})}>
              <Image
                style={[styles.image, {width: 50, height: 50}]}
                source={require('./icons/add.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.topContainer}>
            <TouchableOpacity
              style={[
                styles.imagecontainer,
                {
                  marginTop: 50,
                  width: 80,
                  height: 80,
                  backgroundColor: '#99A3A4',
                },
              ]}
              onPress={() => (!net ? this.onLogoutAll() : {})}>
              <Image
                style={[styles.image, {width: 50, height: 50}]}
                source={require('./icons/logout.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  imagecontainer: {
    shadowWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    borderRadius: 30,
    shadowRadius: 50,
    backgroundColor: '#E59866',
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceContainer: {
    shadowWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    borderRadius: 30,
    shadowRadius: 50,
    backgroundColor: '#F5B041',
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 70,
  },
  bottomnaincontainer: {
    justifyContent: 'center',
    marginTop: 120,
  },
  topContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bottomtopcontainer: {
    backgroundColor: '#f0f',
  },
  maincontainer: {
    shadowWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    borderRadius: 30,
    shadowRadius: 50,
    backgroundColor: '#99A3A4',
    elevation: 20,
  },
  buttonContainer: {
    height: 100,
    width: 100,
    backgroundColor: '#E59866',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  container: {
    backgroundColor: '#F6DDCC',
    justifyContent: 'space-between',
    flex: 1,
  },
  Toptopbarcontainer: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Toptopbarcontainertext: {
    fontSize: 30,
    padding: 10,
  },
  Topbottombarcontainer: {
    justifyContent: 'center',
  },
};

export default connect(
  state => state,
  {...screen_1, ...screen_2, ...screen_3, ...screen_4},
)(Screen_1);
