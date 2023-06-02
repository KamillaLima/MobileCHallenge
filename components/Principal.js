import {View,Text} from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
const { Navigator, Screen } = createDrawerNavigator();
import Agricultura from './Agricultura.js';
import Pecuaria  from './Pecuaria.js';
import Controle from './Controle.js';
import Comunidade  from './Comunidade.js';
import Publicar from './Publicar.js';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
          FarmShare
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const Principal = () => {
  const screenOptions = {
    headerStyle: { backgroundColor: '#3BAB70' },
    headerTintColor: 'white',
    headerTitle: '',
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'navy' }}>
      <Navigator
        useLegacyImplementation
        screenOptions={screenOptions}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Screen name="Publicar" component={Publicar} />
        <Screen name="Comunidade" component={Comunidade} />
        <Screen name="Agricultura" component={Agricultura} />
        <Screen name="Pecuária" component={Pecuaria} />
        <Screen name="Controle de pragas" component={Controle} />
      </Navigator>
    </View>
  );
};

export default Principal;
