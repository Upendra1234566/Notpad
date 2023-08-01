import React, { useEffect } from "react";
import { View,Text, ImageBackground, Image ,StatusBar} from "react-native";


const Splash = (props)=>{
    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.navigate('Appnavigation')
        },2000)
    })
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f57905"}}>
              <StatusBar animated={true} backgroundColor="#f57905" />
          <Image
           source={{uri: 'https://www.computerhope.com/jargon/n/notes.png'}}
           style={{width: 100, height: 100}}
          />
          <Text style={{fontWeight:"700",color:"#fff",marginVertical:4}}>Notepad</Text>
          <Text style={{fontWeight:"700",color:"#fff"}}>Write and manage your notes</Text>
          <View style={{position:"absolute",bottom:20}}>
            <Text style={{fontWeight:"400",color:"#fff"}}>Version:1.0.2</Text>
          </View>
        </View>
    )
}

export default Splash;