import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { Heading } from 'native-base';

const EmptyList = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' , height:'100%'}}>
      <LottieView
        autoPlay
        style={{
          width:200,
          height:150,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('./animations/waiting.json')}
      />
      <Heading>No Surveys Yet</Heading>
    </View>
  )
}

export default EmptyList