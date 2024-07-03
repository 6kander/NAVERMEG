import { View, Text, FlatList,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from './../../configs/FirebaseConfig';
import { collection,getDocs,query } from 'firebase/firestore';
export default function Slider() {
    const [SliderList,setSliderList]=useState([]);
    useEffect(()=>{
        getSliderList();

    },[]);
    const getSliderList=async()=>{
        setSliderList([]);
        const q=query(collection(db,'Slider'));
        const querySnapshot=await getDocs(q);
        querySnapshot.forEach((doc)=>{
            console.log(doc.data());
            setSliderList(prev=>[...prev,doc.data()]);
        })

    }
  return (
    <View style={{
        alignItems:'center',
        marginTop:14,
    }}>
      <Text style={{
        fontSize:20,
        fontFamily:'bold'

      }}>VERMEG Bus Drivers</Text>
      <FlatList
      data={SliderList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{
        
      }}
      renderItem={({item,index})=>(
        <Image source={{uri:item.imageUrl}}
        style={{
            width:200,
            height:160,
            borderRadius:14,
            marginRight:5,
            marginLeft:5,
            borderColor:'#000',
            borderWidth:2
        }}/>
      )
    }/>
    </View>
  )
}