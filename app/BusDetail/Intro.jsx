import { View, Text,Image } from 'react-native'
import React from 'react'
import { Colors } from './../../constants/Colors'
export default function Intro({Bus}) {
  return (
    <View style={{ display:'flex',
      gap:20,
    }}>
      <Image source={require('./../../assets/images/38fBDfT.jpg')}
      style={{  
        width:'100%',
        height:300,
        borderWidth:2,
      }}/>
      <View style={{
        padding:20,
        backgroundColor:Colors.PRIMARY,
        borderRadius:20,
        borderWidth:2,
        borderColor:'#000'
      }} >
      <Text style={{
        fontSize:30,
        fontFamily:'bold',
        color:'#000',
      }}>LINE° {Bus?.Number}</Text>
      <View style={{display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:10,
      

      }}>
      <Text style={{
        fontFamily:'bold',
        color:'#000'


      }}>Location : </Text>
      <Text style={{
        fontFamily:'outfit',
        color:'#000'

      }}
      >{Bus?.StopPoint}</Text>
      </View>
      <Text style={{
        marginTop:20,
        fontFamily:'bold',
        color:'#000',
              }}>Time of Arrival : {Bus?.TimeArrival}</Text>
              </View>
    </View>
  )
}