import { View, Text,Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';

export default function profile() {
  const {user}=useUser();
  return (
    <View style={{
      padding:20,
    }}>
      <Text style={{
        fontFamily:'bold',
        fontSize:30,
      }}>profile</Text>
      <View style={{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        gap:10,
      }}>
        <Image source={{uri:user?.imageUrl}}
        style={{
          width:100,
          height:100,
          borderRadius:99,
        }}/>
        <Text style={{
          fontFamily:'bold',
          fontSize:25
        }}>{user?.fullName}</Text>
        <Text style={{
           fontFamily:'outfit',
           fontSize:20
        }}>{user?.primaryEmailAddress?.emailAddress}</Text>
      </View>
    </View>
  )
}