import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CustomDrawer = (props) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.viewCon}>
        <View style={Styles.Viewimg}>
          <Image
            source={{uri: 'https://www.computerhope.com/jargon/n/notes.png'}}
            style={{width: 60, height: 60}}
          />
          <Text style={Styles.Viewtxt}>Notepad</Text>
          <Text style={Styles.Viewtxt}>Create By @WebSpread</Text>
        </View>
      </View>
      {/* /************************************************************* */}
      <View style={{flex: 3, backgroundColor: '#fff'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            onPress={()=> props.navigation.navigate('NotesSlelecion')}
          >
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/2048px-OneDrive_Folder_Icon.svg.png',
              }}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 14, fontWeight: '700', marginEnd: 60}}>
            Notes Selecions
          </Text>
          <TouchableOpacity>
            <Icon name="plus" type="font-awesome" color="gray" size={24} />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity
           onPress={()=> props.navigation.navigate('ImportantNotes')}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              margin: 10,
            }}>
            <Image
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/009/385/449/original/folder-icon-clipart-design-illustration-free-png.png',
              }}
              style={{width: 20, height: 20, marginHorizontal: 4}}
            />
            <Text
              style={{fontSize: 14, fontWeight: '700', marginHorizontal: 20}}>
              Importante Notes
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity
           onPress={()=> props.navigation.navigate('School')}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              margin: 10,
            }}>
            <Image
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/004/641/880/original/illustration-of-high-school-building-school-building-free-vector.jpg',
              }}
              style={{width: 20, height: 20, marginHorizontal: 4}}
            />
            <Text
              style={{fontSize: 14, fontWeight: '700', marginHorizontal: 20}}>
              School
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity
           onPress={()=> props.navigation.navigate('Tasks')}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              margin: 10,
            }}>
            <Image
              source={{
                uri: 'https://t3.ftcdn.net/jpg/01/05/52/58/360_F_105525808_drDgGCDjy3Icd6dLmkoSZgO4GN2OKtIn.jpg',
              }}
              style={{width: 24, height: 24, marginHorizontal: 4}}
            />
            <Text
              style={{fontSize: 14, fontWeight: '700', marginHorizontal: 20}}>
              Tasks
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity
           onPress={()=> props.navigation.navigate('Favorite')}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              margin: 10,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png',
              }}
              style={{width: 20, height: 20, marginHorizontal: 4}}
            />
            <Text
              style={{fontSize: 14, fontWeight: '700', marginHorizontal: 20}}>
              Favorite
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity
           onPress={()=> props.navigation.navigate('RecylerBin')}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              margin: 10,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3520/3520181.png',
              }}
              style={{width: 20, height: 20, marginHorizontal: 4}}
            />
            <Text
              style={{fontSize: 14, fontWeight: '700', marginHorizontal: 20}}>
              RecylerBin
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity
           onPress={()=> props.navigation.navigate('Setting')}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              margin: 10,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/126/126472.png',
              }}
              style={{width: 20, height: 20, marginHorizontal: 4}}
            />
            <Text
              style={{fontSize: 14, fontWeight: '700', marginHorizontal: 20}}>
              Setting
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity

          onPress={()=> props.navigation.navigate('About')}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              margin: 10,
            }}>
            <Image
              source={{
                uri: 'https://t3.ftcdn.net/jpg/01/08/24/94/240_F_108249487_w8UD8P6YOYuh6Pr9NUw08juskfxpIBk4.jpg',
              }}
              style={{width: 20, height: 20, marginHorizontal: 4}}
            />
            <Text
              style={{fontSize: 14, fontWeight: '700', marginHorizontal: 20}}>
              About
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewCon: {
    flex: 1,
    backgroundColor: '#f57905',
  },
  Viewimg: {
    marginHorizontal: 25,
    marginVertical: 40,
  },
  Viewtxt: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default CustomDrawer;
