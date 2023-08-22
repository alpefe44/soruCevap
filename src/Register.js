import { View, Text } from 'react-native'
import React, { useState } from 'react'
import LottieView from 'lottie-react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Heading, Input, Box, Button } from 'native-base'

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <View style={{ padding: 15 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 150,
              backgroundColor: '#eee',
            }}
            source={require('./animations/user.json')}
          />
        </View>
        <View style={{ marginBottom: 15 }}>
          <Heading paddingY={3}>Email</Heading>
          <Input
            placeholder='Email'
            variant="underlined"
            fontSize={20}
            borderColor='#686565'
            autoCapitalize='none'
            value={email}
            onChangeText={setEmail}
          ></Input>
        </View>
        <View>
          <Heading paddingY={3}>Password</Heading>
          <Input
            placeholder='Password'
            variant="underlined"
            fontSize={20}
            borderColor='#686565'
            value={password}
            onChangeText={setPassword}
          ></Input>
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 15 }}>
          <Button disabled={!email || !password} colorScheme={'green'} w={100} p={3} size='md' mr={1}>
            Login
          </Button>
          <Button colorScheme={'light'} w={100} p={3} size='md'>
            Sign Up
          </Button>
        </View>

      </View>
    </View>
  )
}

export default Register