import React, {Fragment, useState, Component} from 'react';
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
      hour: 0,
      minute: 0,
      group: '',
      selectedHours: 0,
      selectedMinutes: 0
    }
  }
  render() {
    const { selectedHours, selectedMinutes } = this.state;
    return (
      <View >
        <Input
          placeholder='Routine name'
          leftIcon={<Icon name='update' size={24} color='black' />}
        />
        <Input
          placeholder='description'
          leftIcon={<Icon name='update' size={24} color='black' />}
        />
        <Input
          placeholder='group name'
          leftIcon={<Icon name='update' size={24} color='black' />}
        />
        <Text style={styles.time}>{selectedHours}hr:{selectedMinutes}min</Text>
        <TimePicker
          selectedHours={selectedHours}
          //initial Hourse value
          selectedMinutes={selectedMinutes}
          //initial Minutes value
          onChange={(hours, minutes) => this.setState({ 
               selectedHours: hours, selectedMinutes: minutes 
         })}
        />
        <View >
          <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              onPress={() => this.props.changeCurrentScreen('main')}
              title="Save Routine"
              color="#841584"
            />
            <Button
              onPress={() => this.props.changeCurrentScreen('main')}
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