import { View, Text } from 'react-native'
import React from 'react'
import { GET_ANSWERS_QUERY } from './Query';
import { useSubscription } from '@apollo/client';
import Anitamion from './Anitamion';
import Item from './components/Item';

const Result = ({ id }) => {

  const { loading, data } = useSubscription(GET_ANSWERS_QUERY, {
    variables: {
      id: id
    }
  });

  if (loading) {
    return <Anitamion></Anitamion>
  }

  const { options } = data.questions_by_pk;
  const total = options.reduce((total, item) => total + item.answers_aggregate.aggregate.count, 0)

  console.log(total, "total")
  return (
    <View>
      {options.map((item) => (
        <Item key={item.id} total={total} item={item}></Item>
      ))}
    </View>
  )
}

export default Result