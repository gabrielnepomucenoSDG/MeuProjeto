import React from 'react';
import { View, Text, Image } from 'react-native';

const styles = {
  img : {
    alignSelf: 'center'
  },
    containerX: {
    backgroudColor: '#0ff',
    width: 350,
    height: 200
  }
}



export default function Capa() {
  return (
    <View style={styles.containerX}>
      <Image
        source={{uri:"https://www.pngarts.com/files/4/Luxury-Perfume-PNG-Image-with-Transparent-Background.png"}}
        style={styles.img}
      />
      <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Perfumes</Text>
    </View>
  );
}