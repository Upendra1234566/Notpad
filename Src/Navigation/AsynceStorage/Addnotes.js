import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Favorite from '../Notapad/Favorite';

const Addnotes = ({route}) => {
  const [input, setInput] = useState('');
  const [save, setSave] = useState([]);
  const [inputttxt, setInputtxt] = useState('');
  const [contacts, setContats] = useState([]);
  const [update, setUpdate] = useState(0);
  const navigation = useNavigation();

  var x = new Date();
  var b = x.toLocaleTimeString();
  var c = x.toDateString();

  const updated = async () => {
    let tem = [];
    let x = JSON.parse(await AsyncStorage.getItem('DATA'));
    let h = x.filter(obj => obj.input != update);

    console.log('hh', h);

    h.map(item => {
      tem.push(item);
    });

    tem.push({input: input, inputttxt: inputttxt, x: b});

    console.log(tem);
    await AsyncStorage.setItem('DATA', JSON.stringify(tem));

    // setInput('');

    navigation.goBack();
  };

  const SaveData = async () => {
    let tem = [];
    let x = JSON.parse(await AsyncStorage.getItem('DATA'));

    if (x != null) {
      x.map(item => {
        tem.push(item);
      });
    }

    tem.push({input: input, inputttxt: inputttxt, x: b});
    await AsyncStorage.setItem('DATA', JSON.stringify(tem));

    navigation.goBack();
    console.log(tem);
  };

  const ups = async e => {
    let x = JSON.parse(await AsyncStorage.getItem('DATA'));

    const foundObject = x.find(obj => Object.values(obj)[0] == e);
    // console.log('rrr',foundObject.Upendra)
    setInput(foundObject.input);
    setInputtxt(foundObject.inputttxt);
    // arrayOfObjects.find(obj => Object.values(obj)[1] === searchValue);
  };
  useEffect(() => {
    if (route.params && route.params.id) {
      setUpdate(route.params.id);

      ups(route.params?.id);
    }
  }, [route.params]);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginHorizontal: 10, marginVertical: 20}}>
        <TextInput
          multiline={true}
          value={input}
          placeholder="Input title"
          onChangeText={txt => setInput(txt)}
          style={{fontSize: 28, fontWeight: '700'}}
        />
        <Text style={{fontSize: 10}}>{c + ' ' + b}</Text>
        <TextInput
          value={inputttxt}
          placeholder="Write Here"
          multiline={true}
          numberOfLines={4}
          onChangeText={e => setInputtxt(e)}
          style={{fontSize: 16}}
        />

        {update == 0 ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: '90%',
                height: 50,
                borderRadius: 4,
                backgroundColor: '#fa9d07',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => SaveData()}>
              <Text style={{fontSize: 16, color: '#fff'}}>Savedata</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: '90%',
                height: 50,
                borderRadius: 4,
                backgroundColor: '#fa9d07',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => updated()}>
              <Text style={{fontSize: 16, color: '#fff'}}>Updated</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Addnotes;
