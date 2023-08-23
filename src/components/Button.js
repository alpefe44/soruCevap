import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export const Button1 = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="add-circle" size={32} color="white" />
    </TouchableOpacity>
  )
}

export const Button2 = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ position: 'absolute', right: 0, top: 0 }}>
      <Ionicons name="close-circle" size={32} color="black" />
    </TouchableOpacity>
  )
}

export const Button3 = ({onPress}) => {
  return(
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="ios-person-circle-outline" size={32} color="black" />
    </TouchableOpacity>
  )
}



