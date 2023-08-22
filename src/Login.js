import { Pressable, View } from 'react-native'
import React, { useState } from 'react'
import { Heading, Input, Box, Button } from 'native-base'
import LottieView from 'lottie-react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { login, register } from './auth';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const { navigate } = useNavigation();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = () => {
    login(email, password);
  }

  return (
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
          type={show ? 'text' : 'password'}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Ionicons name={show ? "eye" : "eye-off"} size={24} color="black" />
            </Pressable>
          }
        ></Input>
      </View>
      <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 15 }}>
        <Button disabled={!email || !password} colorScheme={'green'} w={100} p={3} size='md' mr={1} onPress={handleSubmit}>
          Login
        </Button>
        <Button colorScheme={'light'} w={100} p={3} size='md' onPress={() => navigate('Register') }>
          Sign Up
        </Button>
      </View>

    </View>
  )
}

export default Login