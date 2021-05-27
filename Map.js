import 'react-native-gesture-handler'

import React, {Component} from 'react';
import {View, Image} from 'react-native';
import MapView from 'react-native-maps'
import MyDrawer from './MyDrawer'

const latitudeDelta = 0.025
const longitudeDelta = 0.25


export default class App extends Component{

  state = {
    region: {
      latitudeDelta,
      longitudeDelta,
      latitude: 18.9261,
      longitude: -99.23075,
    }
  }

  onChangeValue = region =>{
    this.setState({
      region
    })
  }

  render(){
    return(
      <View style={{flex:1}}>
        <MapView 
        style={{flex:1}}
        initialRegion = {this.state.region}
        onRegionChangeComplete = {this.onChangeValue}
        />
        <View style={{top: '50%', left:'50', marginLeft:-24, marginTop:-48, position:'absolute'}}>
          <Image style={{height: 48, width: 48}} source={require('./src/assets/bnew.png')}/>
          </View>
      </View>
    )
  }
}
