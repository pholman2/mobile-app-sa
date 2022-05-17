import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './screens/Index';
import Create from './screens/Create';
import Details from './screens/Details';
import Edit from './screens/Edit';
import Delete from './screens/Delete';

export default function App() {

  const Stack = createNativeStackNavigator(); 
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Index" component={Index}   options={{...ho, title: 'My Contacts' }}/>
          <Stack.Screen name="Create" component={Create} options={{...ho, title: 'Add Contact' }}/>
          <Stack.Screen name="Details" component={Details} options={{...ho, title: 'Contact Details' }}/>
          <Stack.Screen name="Edit" component={Edit} options={{...ho,title: 'Update Contact' }}/>
          <Stack.Screen name="Delete" component={Delete} options={{...ho, title: 'Delete Contact' }}/>
        </Stack.Navigator>
    </NavigationContainer>
  ); 
}

let ho ={
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}; 