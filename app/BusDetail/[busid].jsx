import { View, Text, ActivityIndicator,Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Tabs, useLocalSearchParams, useNavigation } from 'expo-router';
import { db } from './../../configs/FirebaseConfig';
import { collection, getDoc, query, where,doc } from '@firebase/firestore';
import { Colors } from './../../constants/Colors';
import Intro from './Intro';
import { Feather } from '@expo/vector-icons';
import Button from './Button';
import Bus from './../../components/Home/Bus';

export default function BusDetail() {
    const{busid}=useLocalSearchParams();
    const[Bus,setBus]=useState();
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        GetBusDetailbyId();

    },[]);
    const GetBusDetailbyId=async()=>{
        setLoading(true);
        const docRef=doc(db,'Buses',busid);
        const docSnap=await getDoc(docRef);
        if(docSnap.exists()){
        setBus(docSnap.data());
        setLoading(false)
    
    }
        else{
            console.log("No Such document!");
            setLoading(false) 
        } 
        
    }
    const nav=useNavigation();
    useEffect(()=>{
        nav.setOptions({ 
            headerShown:false,
        })
    })
  return (
    <View style={{

    }}>
        {loading?
        <ActivityIndicator
        size={'large'}
        color={Colors.PRIMARY}
        />:
        <View style={{
        }}>
         <Intro Bus={Bus} />
         <View style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        gap:10
    }}>
      <Text style={{
        fontFamily:'bold',
        fontSize:25,
      }}>Click on the Star to get Notified 5 Minutes before the Bus Arrives!</Text>
      <Feather name="arrow-down-circle" size={50} color="black" />
            
         </View>
         <Button/>

        </View>
        
        
        }

        
    </View>
  )
}