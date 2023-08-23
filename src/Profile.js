import { View, Text } from 'react-native'
import React from 'react'
import { auth } from './auth'
import { Button, Heading, useToast } from 'native-base'
import { logout } from './auth'

const Profile = ({ navigation }) => {

  const toast = useToast();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login')
        toast.show({
          title: 'Log Out !',
          placement: 'top',
        })
      }).catch((err) => {
        alert(err.message)
      });
  }
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <Heading mb={5}>Welcome {auth.currentUser.email}</Heading>
      <Button colorScheme={'danger'} px={8} py={4} onPress={handleSignOut}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Log Out</Text>
      </Button>
    </View>
  )
}

export default Profile