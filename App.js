import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Slider from "@react-native-community/slider";

const App = () => {
  const [vl,setVl] = useState(50);
  return(
    <View style={styles.container}>
      <Slider 
        minimumValue={0}
        maximumValue={100}
        value={50}
        onValueChange={ (vlSelecionado) => { setVl(vlSelecionado) }}
        
      />
      <Text style={styles.vlText}>{vl.toFixed(0)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  vlText: {
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 35
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
