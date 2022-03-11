import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import Poppins from './src/component/Fonts/Poppins/Poppins'

export default function App() {
//start hide splash screen
  useEffect(() => {
    SplashScreen.hide()
  }, [])
////end hide splash screen
  return (
    <View>
      
      <Poppins type="Bold">
        ini adalah Poppins 1
      </Poppins>

      <Poppins>
        ini adalah Poppins 2
      </Poppins>

      <Poppins>
        ini adalah Poppins 2
      </Poppins>
  
    </View>
  )
}