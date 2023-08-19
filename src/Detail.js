import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { ADD_NEW_ANSWER, GET_BY_ID } from './Query';
import Anitamion from './Anitamion';
import { Button, Heading } from 'native-base';

const Detail = ({ route }) => {

  const [addNewAnswer, { error }] = useMutation(ADD_NEW_ANSWER);
  const [selectedItems, setSelectedItems] = useState([]);
  const { id } = route.params;

  const { loading, data } = useQuery(GET_BY_ID, {
    variables: {
      id,
    }
  });

  if (loading) {
    return <Anitamion></Anitamion>
  }

  const { text, options } = data.questions_by_pk;

  const handleSubmit = async () => {
    if (selectedItems.length === 0) {
      return
    }
    await addNewAnswer({
      variables: {
        option_id: selectedItems[0]
      }
    })
    alert("OK");
  }

  //tekli seçim 
  const handlePress = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      return (
        prevSelectedItems.includes(itemId) ? prevSelectedItems.filter((id) => id !== itemId) : [itemId]
      )
    }
    )
  }
  return (
    <View style={styles.container}>
      <Heading>{text}</Heading>
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
      </View>
      <Button mt={5} onPress={handleSubmit}>Submit</Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
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

export default Detail