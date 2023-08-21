import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Heading, Box, Progress } from 'native-base'


const Item = ({ item, total }) => {

  const width = Dimensions.get('screen').width;
  const yuzde = (item.answers_aggregate.aggregate.count * 100 / total).toFixed(1);


  const styles = StyleSheet.create({

  })
  return (
    <View style={{ marginBottom: 8, marginTop: 10 }}>
      <Heading style={{ paddingVertical: 15 }}>
        {item.text}
      </Heading>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', borderWidth: 2, padding: 5, borderColor: 'gray', borderRadius: 10, flexWrap: 'wrap' , width:'100%' }}>
        <Text style={{ fontWeight: 'bold' }} >{yuzde}</Text>
        <Progress colorScheme={'green'} width={width - 85} value={yuzde} my={4}></Progress>
      </View>
    </View>
  )
}



export default Item