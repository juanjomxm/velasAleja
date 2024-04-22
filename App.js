import react from 'react';

import { ViewSpecialCandles } from './SpecialCandles/SpecialCandles';
import { SmallCandles } from './SmallCandles/SmallCandles';

import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';


export default function App() {
  return (
    <ImageBackground
    source={{uri: 'https://th.bing.com/th/id/OIG3.63Iz61bIuap1n7xa7hbT?w=1024&h=1024&rs=1&pid=ImgDetMain'}}
    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    resizeMode="cover"
    >
      <Text style={styles.title}>CATALOGO VELAS</Text>

      <ScrollView>
        <View style={styles.bottomContainer}>
          <Text style={styles.subtitle}>FECHAS ESPECIALES</Text>
          <ViewSpecialCandles />

          <Text style={styles.subtitle}>VELAS PEQUEÑAS</Text>
          <SmallCandles/>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },
  bottomContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})
