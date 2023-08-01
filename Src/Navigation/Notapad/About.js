import React,{useState} from "react";
import { View,Text,TextInput } from "react-native";



const About = ()=>{
    const [text, setText] = useState('');

    const handleTextChange = (inputText) => {
      setText(inputText);
    };
    return(
        <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
          onChangeText={handleTextChange}
          value={text}
        />
        <Text>You entered: {text}</Text>
      </View>
    )
}

export default About;