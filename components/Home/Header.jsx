import { View, Text,Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from './../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
  const {user}=useUser();
  return (
    <View style={{
      padding:20,
      paddingTop:50,
      backgroundColor:Colors.PRIMARY,
      borderColor:'#000',
      borderWidth:1,
      borderBottomLeftRadius:35,
      borderBottomRightRadius:35
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:15,
        backgroundColor:Colors.GRAY,
        borderRadius:99,
        borderColor:'#000',
        borderWidth:2
      }}>
      <Image source={{uri:user?.imageUrl}}
      style={{
        width:60,
        height:60,
        borderRadius:99
      }}
      />
      <View>
        <Text style={{
          fontSize:12,
          fontFamily:'outfit',
        }}>Hello,</Text>
        <Text style={{
          fontSize:20,
          fontFamily:'outfit',
          color:Colors.SCND
        }}>{user?.fullName}</Text>
      </View>

    </View>
    <View style={{
      display:'flex',
      flexDirection:'row',
      gap:10,
      padding:10,
      marginTop:20,
      backgroundColor:'#fff',
      borderColor:'#000',
      borderRadius:10,
      borderWidth:2,
    }}>
    <FontAwesome name="search" size={24} color="black" />
    <TextInput placeholder='Look for Bus...' style={{fontFamily:'outfit',fontSize:13,color:Colors.GRAY,}}/>
    </View>
    </View>
  )

}