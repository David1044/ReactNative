import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, SafeAreaView} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      pin1 : "",
      pin2 : "",
      pin3 : "",
      pin4 : "",

    }
  }

  componentDidMount=() =>{
    this.refs.nameref.focus()
  }


  render(){
    const { pin1, pin2, pin3, pin4 } = this.state
    return(
      <View style={{ flex : 1 }}>

        <View style={{ flex: 0.6, justifyContent : "space-evenly", flexDirection : "row",}}>
          <TextInput
          ref={"pin1ref"}
            onChangeText={(pin1)=> this.setState({ pin1 : pin1 })
            if(pin1 != ""){
              this.refs.pin2ref.focus()
            }}
            value={pin1}
            maxLength={1}
            style={{ backgroundColor: 'f5f4f2', fontWeight : '600', alignSelf : 'center',
                      padding: 15,
                      fontSize: 20,
                      height: 55,
                      width: '10%',
                      borderRadious: 10,
                      borderWidth: 0.5,
                      justifyContent : "center",
                      borderColor: 'grey',
                      alignContent : "center",
                      textAlign : "center",
                    }}
                 />
          <TextInput
          ref={"pin2ref"}
           onChangeText={(pin2)=> this.setState({ pin2 : pin2 }) 
            if(pin2 != ""){
              this.refs.pin3ref.focus()
            }
          }
           value={pin2}
           maxLength={1}
           style={{ backgroundColor: 'f5f4f2', fontWeight : '600', alignSelf : 'center',
                      padding: 15,
                      fontSize: 20,
                      height: 55,
                      width: '10%',
                      borderRadious: 10,
                      borderWidth: 0.5,
                      justifyContent : "center",
                      borderColor: 'grey',
                      alignContent : "center",
                      textAlign : "center",
                    }}
                 />
          <TextInput
          ref={"pin3ref"}
            onChangeText={(pin3)=> this.setState({ pin3 : pin3 })
            if(pin3 != ""){
              this.refs.pin4ref.focus()
            }}
            value={pin3}
            maxLength={1}        
            style={{ backgroundColor: 'f5f4f2', fontWeight : '600', alignSelf : 'center',
                      padding: 15,
                      fontSize: 20,
                      height: 55,
                      width: '10%',
                      borderRadious: 10,
                      borderWidth: 0.5,
                      justifyContent : "center",
                      borderColor: 'grey',
                      alignContent : "center",
                      textAlign : "center",
                    }}
                 />
          <TextInput
          ref={"pin4ref"}
           onChangeText={(pin4)=> this.setState({ pin4 : pin4 })
           if(pin2 != ""){
            //this.refs.pin3ref.focus()
            alert("Gracias por ingresar el pin")
          }}
           value={pin4}
           maxLength={1}
            style={{ backgroundColor: 'f5f4f2', fontWeight : '600', alignSelf : 'center',
                      padding: 15,
                      fontSize: 20,
                      height: 55,
                      width: '10%',
                      borderRadious: 10,
                      borderWidth: 0.5,
                      justifyContent : "center",
                      borderColor: 'grey',
                      alignContent : "center",
                      textAlign : "center",
                    }}
                 />
        </View>
      </View>
    )
  }
}
