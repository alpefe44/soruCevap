import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ADD_NEW_ANSWER } from './Query';
import Anitamion from './Anitamion';
import { useMutation } from '@apollo/client';
import { Button } from 'native-base';
import { auth } from './auth';

const Form = ({ options, setIsVoted, id }) => {

  const [addNewAnswer, { error, loading }] = useMutation(ADD_NEW_ANSWER);
  const [selectedItems, setSelectedItems] = useState([]);


  if (loading) {
    return <Anitamion></Anitamion>
  }

  const handleSubmit = async () => {
    if (selectedItems.length === 0) {
      return
    }
    await addNewAnswer({
      variables: {
        option_id: selectedItems[0],
        user_id: auth.currentUser.uid,
        question_id : id
      }
    })
    alert("OK");
    setIsVoted(true);
  }

  const handlePress = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      return (
        prevSelectedItems.includes(itemId) ? prevSelectedItems.filter((id) => id !== itemId) : [itemId]
      )
    }
    )
  }

  return (
    <View>
      {options.map((item) => (
        <TouchableOpacity key={item.id} style={[
          styles.click,
          selectedItems.includes(item.id) ? { backgroundColor: 'green' } : {}
        ]}
          onPress={() => handlePress(item.id)}>
          <Text style={styles.text} >{item.text}</Text>
        </TouchableOpacity >
      ))}
      <Button mt={5} onPress={handleSubmit}>Submit</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  click: {
    padding: 13,
    marginBottom: 3,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'gray',

  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  }
})

export default Form