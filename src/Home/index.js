import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Questions from '../index';
import { Button1, Button2, Button3 } from '../components/Button';
import AddNewModal from '../AddNewModal';
import { useSubscription } from '@apollo/client'
import Anitamion from '../Anitamion';
import { GET_QUESTIONS_QUERY } from '../Query';


const Home = ({ navigation }) => {


  const [modalVisible, setModalVisible] = useState(false)
  const [options, setOptions] = useState([{ text: '' }, { text: '' }])

  const { loading, data } = useSubscription(GET_QUESTIONS_QUERY);
  

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button1 onPress={() => setModalVisible((prev) => !prev)}></Button1 >
      ),
      headerLeft: () => (
        <Button3 onPress={() => navigation.navigate('Profile')}></Button3 >
      ),
    })
  }, [navigation])

  if (loading) {
    return <Anitamion></Anitamion>
  }




  return (
    <View>
      <Questions data={data.questions}></Questions>
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