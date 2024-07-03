import React from 'react';
import { View, TouchableOpacity, Alert,Image } from 'react-native';
import * as Notifications from 'expo-notifications';
import { Colors } from '../../constants/Colors';

const NotifyMeButton = () => {

  const handleNotifyPress = async () => {
    const trigger = new Date();
    trigger.setHours(7);
    trigger.setMinutes(25);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Reminder',
        body: 'It\'s 7:25 AM!',
      },
      trigger: {
        hour: 7,
        minute: 25,
        repeats: true,
      },
    });

    Alert.alert('Notification Scheduled', 'You will be notified at 7:25 AM .');
  };

  return (
    <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }} >
      <TouchableOpacity onPress={handleNotifyPress}>
        <View style={{
            padding:-20,
        }}>
                <Image source={require('./../../assets/images/star.png')}
                style={{ 
                    width:190,
                    height:200,
                    marginTop:20,
                }}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NotifyMeButton;