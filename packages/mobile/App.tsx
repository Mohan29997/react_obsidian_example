/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { View, Text, SafeAreaView } from 'react-native'
import { Obsidian } from 'react-obsidian'
import { ApplicationGraph } from './di/main'

class App extends Component {
  componentDidMount(): void {
    SplashScreen.hide()
    console.log(Obsidian.obtain(ApplicationGraph).fooService().test())
  }

  render() {
    return (
      <SafeAreaView>
        <Text>hah</Text>
      </SafeAreaView>
    )
  }
}
export default App
