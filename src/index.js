import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useSubscription } from '@apollo/client'
import { GET_QUESTIONS_QUERY } from '../src/Query';
import Anitamion from './Anitamion';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'


const Questions = () => {
  const { navigate } = useNavigation()
  const { loading, data } = useSubscription(GET_QUESTIONS_QUERY);

  if (loading) {
    return <Anitamion></Anitamion>
  }
  return (
    <View>
      {data.questions.map((item, i) => (
        <TouchableOpacity style={styles.items} onPress={() => navigate('Detail', { id: item.id })}>
          <Text key={i} style={styles.text}>{item.text}</Text>
          <TouchableOpacity><Ionicons name="close" size={24} color="red" /></TouchableOpacity>
        </TouchableOpacity>
      ))}
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


export default Questions