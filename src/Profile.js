import { View, Text } from 'react-native'
import React from 'react'
import { auth } from './auth'
import { Button } from 'native-base'
import { logout } from './auth'

const Profile = ({ navigation }) => {

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login')
      }).catch((err) => {
        alert(err.message)
      });
  }
  return (
    <View>
      <Text>Welcome {auth.currentUser.email}</Text>
      <Button onPress={handleSignOut}></Button>
    </View>
  )
}

export default Profile