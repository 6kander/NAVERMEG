import { View, Text, FlatList,Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect,useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { db } from './../../configs/FirebaseConfig';
import { collection, query, getDocs } from '@firebase/firestore';
import { Colors } from './../../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import {useRouter} from 'expo-router';

export default function Bus() {
  const router=useRouter();
  const [busList,setBusList]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    GetBusList();

  },[])
  const GetBusList=async()=>{
    setBusList([]);
    setLoading(true)
    const q=query(collection(db,'Buses'))
    const querySnapshot=await getDocs(q);
    querySnapshot.forEach((doc)=>{
      console.log(doc.data());
      setBusList(prev=>[...prev,{id:doc?.id, ...doc.data()}])
    })
    setLoading(false);
  }
  return (
    <View style={{
      height:370
    }}>
    <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        gap:10
    }}>
        <Feather name="arrow-down-circle" size={24} color="black" />
      <Text style={{
        fontFamily:'bold',
        fontSize:25,

      }}>Bus Schedules</Text>
      <Feather name="arrow-down-circle" size={24} color="black" />
    </View>
    <View>
    {busList?.length>0&&loading==false? <FlatList
    horizontal={false}
    data={busList}
    onRefresh={GetBusList}
    refreshing={loading}
    scrollEnabled={true}
    renderItem={({item,index})=>(
      <TouchableOpacity style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:20,
        borderRadius:20,
        borderColor:'#000',
        borderWidth:2,
        margin:3,
        marginLeft:15,
        marginRight:15,
        backgroundColor:Colors.PRIMARY,

      }}
      onPress={()=>router.push('/BusDetail/'+item.id)}>
      <Image source={{uri:item.imageUrl}}
      style={{
        width:70,
        height:70,
        borderRadius:20,
        borderColor:'#000',
        borderWidth:1,



        
      }}
      />
      <Text style={{
        fontFamily:'outfit',
        fontSize:16,
        color:'#fff'
      }}>LINE° {item.Number}</Text>
          <Text style={{
        fontFamily:'outfit',
        fontSize:13,
        color:'#fff'
      }}>{item.TimeArrival}</Text>
      <View style={{
        display:'flex',
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'flex-end',
        padding:10,
        padding:-40,
      }}>
        <Text style={{
          fontFamily:'bold',
          color:'#fff'

        }}>Click For More Details</Text>
      <Entypo name="location-pin" size={24} style={{
        color:'#fff',
      }} />
      </View>

    </TouchableOpacity>
    )}
    />:
    loading?<ActivityIndicator
    size={'large'}
    color={Colors.PRIMARY}
    />:
    <Text>No Bus Found</Text>
  }</View>
  </View>
  )
}