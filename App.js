import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Aula1,Aula2,Aula3,Aula4,Aula5,Aula6,Aula7,Aula8,Aula9,Aula10,Aula11,Aula12,Aula13,Aula14,Aula15,Aula16} from './components/Aulas';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Aula 1" component={Aula1} />
        <Drawer.Screen name="Aula 2" component={Aula2} />
        <Drawer.Screen name="Aula 3" component={Aula3} />
        <Drawer.Screen name="Aula 4" component={Aula4} />
        <Drawer.Screen name="Aula 5" component={Aula5} />
        <Drawer.Screen name="Aula 6" component={Aula6} />
        <Drawer.Screen name="Aula 7" component={Aula7} />
        <Drawer.Screen name="Aula 8" component={Aula8} />
        <Drawer.Screen name="Aula 9" component={Aula9} />
        <Drawer.Screen name="Aula 10" component={Aula10} />
        <Drawer.Screen name="Aula 11" component={Aula11} /> 
        <Drawer.Screen name="Aula 12" component={Aula12} />
        <Drawer.Screen name="Aula 13" component={Aula13} />
        <Drawer.Screen name="Aula 14" component={Aula14} />
        <Drawer.Screen name="Aula 15" component={Aula15} />
        <Drawer.Screen name="Aula 16" component={Aula16} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}