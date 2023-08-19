import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native';

const Anitamion = () => {
  return (
    <View style = {{alignItems:'center' , justifyContent:'center' , height:'100%'}}>
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('./animations/animation_llgo3bow.json')}
      />
    </View>
  )
}

export default Anitamion