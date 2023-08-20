import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_BY_ID } from './Query';
import Anitamion from './Anitamion';
import { Heading } from 'native-base';
import Form from './Form';
import Result from './Result';

const Detail = ({ route }) => {

  const [isVoted, setIsVoted] = useState(false);
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

  return (
    <View style={styles.container}>
      <Heading>{text}</Heading>
      {
        !isVoted ? <Form setIsVoted={setIsVoted} options={options}></Form> : <Result id={id}></Result>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  }
})

export default Detail