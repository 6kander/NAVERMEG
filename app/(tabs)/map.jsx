import React,{useState,useEffect} from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';



export default function App() {
  const [mapRegion,setMapRegion]= useState({
    latitude:36.831644148528234,
    longtitude: 10.23276690137252,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,




  })



  return (
    <View style={styles.container}>
      <MapView style={StyleSheet.absoluteFill} provider={PROVIDER_GOOGLE}
      showsUserLocation
      showsMyLocationButton
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});