import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useSubscription } from '@apollo/client'
import { GET_QUESTIONS_QUERY } from '../src/Query';
import Anitamion from './Anitamion';
import List from '../src/List';
import EmptyList from './EmptyList';


const Questions = () => {
  const { loading, data } = useSubscription(GET_QUESTIONS_QUERY);

  if (loading) {
    return <Anitamion></Anitamion>
  }
  return (
    <View>
      {
        data.questions.length > 0 ? <List data={data.questions}></List> : <EmptyList></EmptyList>
      }

    </View>
  )
}




export default Questions