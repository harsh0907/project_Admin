/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  BackHandler,
} from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';
import * as screen_4 from '../../GlobleState/actions/screen_4';
import * as screen_3 from '../../GlobleState/actions/screen_3';
import * as screen_1 from '../../GlobleState/actions/screen_1';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  UNSAFE_componentWillMount() {
    this.setState({data: this.props.screen_1.mecha});
    this.props.screen_4ChangeActivation(false);
    BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
    });
  }

  onDelete({_id}) {
    this.props.screen_4ChangeActivation(true);
    const {url} = this.props.important_data;
    const uri = `${url}/mecha/deluser`;
    axios({
      method: 'post',
      url: uri,
      data: {_id},
    }).then(() => {
      this.props.screen_4ChangeActivation(false);
      this.props.screen_1ChangeActivation(true);
      this.props.screen_3ChangeActivation(false);
    });
  }

  onBlock({_id, mechano}) {
    this.props.screen_4ChangeActivation(true);
    const {url} = this.props.important_data;
    const uri = `${url}/mecha/updateuser/${_id}`;
    axios({
      method: 'post',
      url: uri,
      data: {mechano: (mechano + 1) % 2},
    })
      .then(() => {
        this.props.screen_4ChangeActivation(false);
        this.props.screen_1ChangeActivation(true);
        this.props.screen_3ChangeActivation(false);
      })
      .catch(() => {
        this.props.screen_4ChangeActivation(false);
        this.props.screen_1ChangeActivation(true);
        this.props.screen_3ChangeActivation(false);
      });
  }

  onChange(data) {
    const op = this.props.screen_1.mecha.filter(mech => {
      return mech.email.toUpperCase().includes(data.toUpperCase());
    });
    this.setState({data: op});
  }

  onHistory({_id}) {
    this.props.screen_3Set_id(_id);
    this.props.screen_3SetChange1('viewhistory');
  }

  renderItem({item}) {
    const im1 = require('./icons/block1.png');
    const im2 = require('./icons/block2.png');
    return (
      <TouchableOpacity
        style={styles.listcontainer}
        onPress={() => this.onHistory(item)}>
        <View>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>{`Email: ${
            item.email
          }`}</Text>
          <Text style={[styles.text, {marginTop: 10}]}>{`Mobile: ${
            item.mobileno
          }`}</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => this.onBlock(item)}>
            <Image
              style={styles.icons}
              source={item.mechano === 1 ? im1 : im2}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onDelete(item)}>
            <Image style={styles.icons} source={require('./icons/del.png')} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }

  onBack() {
    this.props.screen_3ChangeActivation(false);
    this.props.screen_1ChangeActivation(true);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{backgroundColor: '#E59866'}}
          onPress={() => this.onBack()}>
          <Image
            style={{width: 40, height: 40}}
            source={require('./icons/arrow.png')}
          />
        </TouchableOpacity>
        <View style={styles.Inputcontainer}>
          <TextInput
            style={{fontSize: 18, marginLeft: 20}}
            placeholder="Enter Email-Id"
            underlineColorAndroid="transparent"
            onChangeText={data => {
              this.onChange(data);
            }}
          />
        </View>
        <FlatList
          data={this.state.data}
          horizontal={false}
          keyExtractor={item => {
            return item._id;
          }}
          renderItem={this.renderItem.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Inputcontainer: {
    height: 60,
    backgroundColor: '#DCDCDC',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 40,
    elevation: 20,
    borderRadius: 60,
  },
  text: {
    fontSize: 18,
    width: 200,
  },
  addcon: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listcontainer: {
    backgroundColor: '#E59866',
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 20,
  },
  Topcontainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#FFCC80',
    paddingTop: 25,
  },
  buttoncontainer: {
    width: 120,
    height: 40,
    backgroundColor: '#FB8C00',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 40,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
  },
  icons: {
    width: 50,
    height: 50,
    marginLeft: 5,
  },
  nocontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  notext: {
    fontSize: 30,
    color: '#797D7F',
  },
  tagIcon: {
    height: 25,
    width: 25,
  },
  container: {
    backgroundColor: '#0000ff',
    height: null,
    flex: 1,
    justifyContent: 'center',
  },
  formContent: {
    flexDirection: 'row',
    marginTop: 30,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  iconBtnSearch: {
    alignSelf: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  card: {
    height: null,
    paddingBottom: 10,
    marginTop: 2,
    flexDirection: 'column',
    borderTopWidth: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    borderRadius: 30,
    shadowRadius: 20,
    backgroundColor: '#FCDFFF',
    elevation: 12,
  },
  cardContent: {
    flexDirection: 'row',
  },
  imageContent: {
    marginTop: -40,
  },
  tagsContent: {
    marginTop: 10,
    flexWrap: 'wrap',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
    alignSelf: 'center',
    color: '#000',
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: '#FFFDD0',
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tagText: {
    fontSize: 15,
  },
});

export default connect(
  state => state,
  {...screen_4, ...screen_1, ...screen_3},
)(History);
