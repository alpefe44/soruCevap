import { View, Text, TouchableOpacity , StyleSheet} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'

const List = ({ data }) => {

  const { navigate } = useNavigation()
  return (
    <View>
      {data.map((item , i) => (
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

export default List