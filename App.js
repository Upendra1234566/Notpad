import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Appnavigation from './Src/Navigation/Appnavigation';
import User1 from './User1';
import Splash from './Src/Splash';
import About from './Src/Navigation/Notapad/About';
import Favorite from './Src/Navigation/Notapad/Favorite';
import ImportantNotes from './Src/Navigation/Notapad/ImportantNotes';
import NotesSlection from './Src/Navigation/Notapad/NotesSlelecion';
import RecylerBin from './Src/Navigation/Notapad/RecylerBin';
import School from './Src/Navigation/Notapad/School';
import Tasks from './Src/Navigation/Notapad/Tasks';
import Setting from './Src/Navigation/Notapad/Setting';
import Addnotes from './Src/Navigation/AsynceStorage/Addnotes';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Appnavigation"
          component={Appnavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="User1"
          component={User1}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Favorite"
          component={Favorite}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="ImportantNotes"
          component={ImportantNotes}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="NotesSlelecion"
          component={NotesSlection}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="RecylerBin"
          component={RecylerBin}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="School"
          component={School}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Tasks"
          component={Tasks}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: true}}
        />
         <Stack.Screen
          name="Addnotes"
          component={Addnotes}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
