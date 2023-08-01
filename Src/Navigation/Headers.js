import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Headers ({navigation}) {
  const [search, setSearch] = useState('');
  const [iconbar, setIconbar] = useState('Note-book-Imporda..');
  const [cross, setCross] = useState('');
  return (
    <View style={Styles.container}>
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
                  size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginHorizontal: 20}}
                onPress={() => props.navigation.navigate('Bag')}>
                <Icon
                  name="lock"
                  type="font-awesome"
                  color="#fff"
                  size={22}
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
                      color="black"
                      size={22}
                      style={Styles.ImageSource}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setSearch(!search)}>
                    <Icon
                      name="arrow-left"
                      type="font-awesome"
                      color="black"
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
                      color="black"
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
                      color="black"
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
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default Headers;
