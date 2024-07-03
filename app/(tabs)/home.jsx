import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Bus from '../../components/Home/Bus'

export default function home() {
  return (
    <View style={{
    }}>
      <Header/>
      <Slider/>
      <Bus/>
    </View>
  )
}