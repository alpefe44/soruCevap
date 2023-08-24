import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import List from '../src/List';
import EmptyList from './EmptyList';


const Questions = ({ data }) => {
  console.log(data, "dataquestions")
  return (
    <View>
      {
        data.length > 0 ?
          data.map((item,i) => (
            <TouchableOpacity>
              <List key={i} item={item}></List>
            </TouchableOpacity>)
          )
      : <EmptyList></EmptyList>
      }
    </View>
  )
}




export default Questions