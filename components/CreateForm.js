import React, {Fragment, useState, Component} from 'react';
import axios from 'axios';
import { Input, Icon } from 'react-native-elements';
import TimePicker from 'react-native-simple-time-picker';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Button
} from 'react-native';

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      group: '',
      hours: 0,
      minutes: 0
    }

    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handleMainButton = this.handleMainButton.bind(this);
  }

  handleSubmitButton() {
    var requestUrl = 'http://10.3.33.11:3000/api/routines';      
    var routine = {
        name: this.state.name,
        description: this.state.description,
        hours: this.state.hours,
        minutes: this.state.minutes,
        group: this.state.group,
    }   
    this.props.postRoutine(requestUrl, routine);
    this.props.changeCurrentScreen('main');


  }

  handleMainButton() {
    this.props.changeCurrentScreen('main');
  }

  render() {
    const { hours, minutes } = this.state;
    return (
      <View >
        <Input
          placeholder='Routine name'
          leftIcon={<Icon name='update' size={24} color='black' />}
          onChangeText={(text) => this.setState({name: text})}
        />
        <Input
          placeholder='description'
          leftIcon={<Icon name='update' size={24} color='black' />}
          onChangeText={(text) => this.setState({description: text})}
        />
        <Input
          placeholder='group name'
          leftIcon={<Icon name='update' size={24} color='black' />}
          onChangeText={(text) => this.setState({group: text})}
        />
        <Text style={styles.time}>{hours}hr:{minutes}min</Text>
        <TimePicker
          selectedHours={hours}
          //initial Hourse value
          selectedMinutes={minutes}
          //initial Minutes value
          onChange={(hours, minutes) => this.setState({ 
            hours: hours, minutes: minutes 
         })}
        />
        <View >
          <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              onPress={this.handleSubmitButton}
              title="Save Routine"
              color="#841584"
            />
            <Button
              onPress={this.handleMainButton}
              title="Back to Main"
              color="#841584"
            />
          </View>
        </View>
      </View>
    )
  }
}

export default CreateForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   },
  row: {
    flexDirection: 'row',
    margin: 10
  },
  buttonContainer: {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
  },
  widget: {
    flex: 1,
    margin: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  time: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});