/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Buttons } from './src/assets/components/Buttons';


const Logo = require ('./src/assets/images/dog-home.png')
const App = () => {
  return (
        <ScrollView>
        <View style={styles.container}>
          <Image style={styles.home} source={Logo} />
          <Text style={styles.presentation}>Yolkk</Text>
          <Text style={styles.text}>I'ts time to keep calm and add your meds</Text>
          <Buttons />
          <Text></Text><Text></Text><Text></Text><Text></Text>
          <View style={styles.container2}>
          <Text style={styles.date}>13 Nov 2019</Text>
          <Text style={styles.presentation2}>Hey, Monica!</Text>
          </View>
          <Text style={styles.date}>08:00</Text>
          <Text style={styles.text}>Omega 3 - 500mg</Text>
          <Text style={styles.text2}>1 yellow pill, before meal</Text>
          <Text style={styles.text}>Aspirin - 50mg</Text>
          <Text style={styles.text2}>2 blue pills, after meal</Text>
          <Text></Text>
          <Text style={styles.date}>11:00</Text>
          <Text style={styles.text}>Omega 3 - 500mg</Text>
          <Text style={styles.text2}>1 yellow pill, before meal</Text>
          <Text></Text>
          <Text style={styles.date}>14:00</Text>
          <Text style={styles.text}>Omega 3 - 1000mg</Text>
          <Text style={styles.text2}>1 yellow pill, before meal</Text>
          <Text></Text>
          <Text style={styles.date}>17:00</Text>
          <Text style={styles.text}>Omega 3 - 500mg</Text>
          <Text style={styles.text2}>1 yellow pill, before meal</Text>
          <Text></Text>
          <Buttons />
        </View>
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    margin: 20
  },
  container2: {
    flexDirection: 'column',
    backgroundColor: '#ee9b00',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    margin: 20
  },
  presentation: {
    fontSize: 28, 
    margin: 10,
    color: '#212121',
    fontWeight: '700',
    letterSpacing: 1
  },
  presentation2: {
    fontSize: 28,
    marginLeft: -150,
    margin: 12,
    color: '#212121',
    fontWeight: '700',
    letterSpacing: 1
  },
  home:{
    width: 400,
    height: 400
  },
  text:{
    fontSize: 18, 
    margin: 10,
    color: '#212121',
  },
  text2:{
    fontSize: 15,
    marginTop: -10,
    margin: 10,
    color: '#212121',
  },
  date:{
    fontSize: 18,
    marginLeft: -220,
    margin: 12,
    color: '#212121'
  }
});

export default App;
