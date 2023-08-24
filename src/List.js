import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import { auth } from './auth';
import { useMutation } from '@apollo/client';
import { DELETE_BY_QUESTION } from './Query';
import { Spinner } from 'native-base';


const List = ({ item }) => {
  const [deleteQuestions, { loading }] = useMutation(DELETE_BY_QUESTION, {
    variables: {
      id: item.id
    }
  })

  if (loading) {
    return <Spinner justifyContent='flex-end' color="emerald.500" />
  }

  const handleDelete = async () => {
    await deleteQuestions();
  }
  const { navigate } = useNavigation()
  return (
    <View>
      <TouchableOpacity style={styles.items} onPress={() => navigate('Detail', { id: item.id })}>
        <Text key={item.id} style={styles.text}>{item.text}</Text>
        {
          auth.currentUser.uid === item.user_id &&
          (<Pressable onPress={handleDelete}><Ionicons name="close" size={32} color="red" /></Pressable>)
        }
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  items: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: '#008080'
  }
})

export default List