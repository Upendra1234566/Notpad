import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  StatusBar,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function User({navigation, route}) {
  const isfocused = useIsFocused();
  const [search, setSearch] = useState('');
  const [iconbar, setIconbar] = useState('Note-book-Imporda..');
  const [cross, setCross] = useState('');
  const [dataget, setDataget] = useState([]);
  const [fav, setFav] = useState([]);

  const getdata = async () => {
    let x = JSON.parse(await AsyncStorage.getItem('DATA'));
    console.log('ata', dataget);
    setDataget(x);
  };

  const deletedata = async index => {
    const Tempdata = dataget;

    const Selection = Tempdata.filter((item, ind) => {
      return ind != index;
    });
    setDataget(Selection);
    await AsyncStorage.setItem('DATA', JSON.stringify(Selection));
  };

  const Edite = async index => {
    navigation.navigate('Addnotes', {id: index});
  };

  const Favorite = async index => {
    let temp = [];
    let x = JSON.parse(await AsyncStorage.getItem('UPS'));
    if(x!=null){
      x.map((item, index) => {
        temp.push(item);
      });
    }
   
    temp.push(index);
    await AsyncStorage.setItem('UPS', JSON.stringify(temp));

    console.log('fav', temp);
  };

  useEffect(() => {
    getdata();
  }, [isfocused]);

  return (
    <View style={Styles.container}>
      <StatusBar animated={true} backgroundColor="#f57905" />
      <View style={Styles.Inner}>
        {search == 0 ? (
          <View style={Styles.serachtxt}>
            <View style={{marginHorizontal: 10}}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon
                  name="align-left"
                  type="font-awesome"
                  color="#fff"
                  size={28}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginHorizontal: 30}}>
              <Text
                style={{
                  fontSize: 19,
                  color: '#fff',
                  fontWeight: '800',
                  fontFamily: 'Lightltalic',
                }}>
                {iconbar}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',

                justifyContent: 'flex-end',
                marginHorizontal: 1,
              }}>
              <TouchableOpacity onPress={() => setSearch(!search)}>
                <Icon
                  name="search"
                  type="font-awesome"
                  color="#fff"
                  size={21}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginHorizontal: 20}}
                onPress={() => props.navigation.navigate('Bag')}>
                <Icon
                  name="more-vertical"
                  type="font-awesome"
                  color="#fff"
                  size={21}
                  style={Styles.ImageSource}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{backgroundColor: '#fff'}}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 14,
                marginHorizontal: 12,
              }}>
              <View style={{marginTop: 2}}>
                {cross.length == 0 ? (
                  <TouchableOpacity>
                    <Icon
                      name="search"
                      type="font-awesome"
                      color="#5e5d5b"
                      size={21}
                      style={Styles.ImageSource}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setSearch(!search)}>
                    <Icon
                      name="arrow-left"
                      type="font-awesome"
                      color="#f57905"
                      size={25}
                      style={Styles.ImageSource}
                    />
                  </TouchableOpacity>
                )}
              </View>

              <TextInput
                placeholder="Search..."
                value={cross}
                onChangeText={e => setCross(e)}
                style={{marginHorizontal: 6, marginBottom: 10, width: '64%'}}
              />

              {cross.length == 0 ? (
                <View
                  style={{
                    flexDirection: 'row',
                    margin: 4,
                    marginBottom: 14,
                    marginHorizontal: 58,
                  }}>
                  <TouchableOpacity style={{marginRight: 200}}>
                    <Icon
                      name="mic"
                      type="font-awesome"
                      color="#5e5d5b"
                      size={23}
                      style={Styles.ImageSource}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{marginLeft: 60}}>
                  <TouchableOpacity onPress={() => setCross('')}>
                    <Icon
                      name="x"
                      type="font-awesome"
                      color="#5e5d5b"
                      size={24}
                      style={Styles.ImageSource}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        )}
      </View>
      {/*************************************************************************/}
      <View style={{flex: 1}}>
        <View style={{position: 'absolute', right: 40, bottom: 50}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Addnotes')}
            style={Styles.pluss}>
            <Text style={{fontSize: 28, fontWeight: '400', color: '#fff'}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={dataget}
            renderItem={({item, index}) => {
              return (
                <View style={Styles.flat}>
                  <TouchableOpacity>
                    <Text style={Styles.flattxt}>{item.input}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{marginHorizontal: 10}}>{item.inputttxt}</Text>
                  </TouchableOpacity>

                  <Text
                    style={{
                      fontSize: 10,
                      marginHorizontal: 10,
                      color: '#f55307',
                    }}>
                    {item.x}
                  </Text>
                  <View
                    style={{
                      marginHorizontal: 150,
                      position: 'absolute',
                      right: 0,
                      bottom: 0,
                      top: 20,
                    }}>
                    <View style={{flexDirection: 'row', width: 30, margin: 2}}>
                      <TouchableOpacity
                        onPress={() => deletedata(index)}
                        style={{
                          width: '190%',
                          height: 30,
                          borderRadius: 4,
                          backgroundColor: '#fab002',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text style={{fontSize: 16, color: '#fff'}}>DEL</Text>
                        {/* <Icon
                          name="trash"
                          type="font-awesome"
                          color="red"
                          size={28}
                        /> */}
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => Edite(item.input)}
                        style={{
                          width: '190%',
                          height: 30,
                          borderRadius: 4,
                          backgroundColor: '#fab002',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginHorizontal: 4,
                        }}>
                        <Text style={{fontSize: 16, color: '#fff'}}>Edit</Text>
                        {/* <Icon
                          name="edit-2"
                          type="font-awesome"
                          color="#fff"
                          size={24}
                        /> */}
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => Favorite(item.input)}
                        style={{
                          width: '190%',
                          height: 30,
                          borderRadius: 4,
                          // backgroundColor:"#fab002",
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        {/* <Text style={{fontSize: 16, color: '#fff'}}>DEL</Text> */}
                        <Icon
                          name="heart"
                          type="font-awesome"
                          color="#fff"
                          size={24}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Inner: {
    backgroundColor: '#f57905',
    width: windowWidth,
    height: windowHeight / 12,
    shadowColor: '#aeb3bf',
    shadowOpacity: 0.9,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 4,
    elevation: 4,
  },
  serachtxt: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 16,
  },
  pluss: {
    backgroundColor: '#0f94fa',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  flat: {
    flex: 1,
    backgroundColor: '#4d9ae8',
    marginHorizontal: 50,
    margin: 8,
    width: '90%',
    height: 70,
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 6,
    shadowColor: '#aeb3bf',
    shadowOpacity: 0.9,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 4,
    elevation: 4,
  },
  flattxt: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0d0d0f',
    marginHorizontal: 10,
  },
});

export default User;
