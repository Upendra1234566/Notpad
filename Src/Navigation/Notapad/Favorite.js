import React,{useState} from "react";
import { View,Text,FlatList,StyleSheet,Dimensions,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Favorite = ()=>{

    const [dataget, setDataget] = useState([]);

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
    return(
        <View>
            
            <FlatList
            data={[1,1,1,1,1]}
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
    )
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
  
export default Favorite;