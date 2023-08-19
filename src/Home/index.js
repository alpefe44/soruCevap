import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Questions from '../index';
import { Button1, Button2 } from '../components/Button';
import AddNewModal from '../AddNewModal';
import { ScrollView } from 'native-base';



const Home = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false)
  const [options, setOptions] = useState([{ text: '' }, { text: '' }])


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button1 onPress={() => setModalVisible((prev) => !prev)}></Button1 >
      )
    })
  }, [navigation])

  return (
    <View>
      <Questions></Questions>
      <Modal
        animationType="slide"
        visible={modalVisible}
      >
        <AddNewModal closeModal={() => setModalVisible(false)} value={options} setVal={setOptions} />
        <Button2 onPress={() => setModalVisible((prev) => !prev)}></Button2>
      </Modal>
    </View>
  )
}

export default Home