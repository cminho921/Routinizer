import React, {Fragment, useState} from 'react';
import axios from 'axios';
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
} from 'react-native';

import sampleData from '../mockData';
import RoutineList from './RoutineList';
import CreateForm from './CreateForm';

import {
  Constants,
} from 'react-native-unimodules';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'main',
      data: []  
    }

    this.changeCurrentScreen = this.changeCurrentScreen.bind(this);
  }

  componentDidMount() {
    axios.get('http://10.3.33.11:3000/api/routines')
      .then((res) => {
        const routineData = res.data;
        console.log(routineData);
        this.setState({
          data: routineData
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  changeCurrentScreen(input) {
    this.setState({currentScreen: input})
  }

  render() {
    const { currentScreen, data } = this.state;
    const groupNameList = [];
    for (let i = 0; i < data.length; i++) {
      if (!groupNameList.includes(data[i].group)) {
        groupNameList.push(data[i].group)
      }
    }
    return (
      <Fragment>
        <SafeAreaView style={styles.container}>
        
          {/* header */}
          <View >
            <Text style={styles.header_appName}> Routinizer </Text>
          </View>
    
          {/* create routine button */}
          <View style={styles.row}>
            <TouchableOpacity style={[styles.widget, { backgroundColor: '#fca' }]} onPress={() => this.setState({currentScreen: 'createRoutine'})}>
              <Text>Create Routine List</Text>
            </TouchableOpacity>
          </View>
    
          {/* routine list */}
          {/* connect to mock data and render using map */}
          <Text>My Routine List</Text>
          <RoutineList routines={data} groupNameList={groupNameList}/>
    
          {/* create form modal */}
          
          <View style={styles.container}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={currentScreen === 'createRoutine'}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              <SafeAreaView >
                <View>
                  <Text style={styles.header_create_routine}>Create New Routine</Text>
                  <CreateForm changeCurrentScreen={this.changeCurrentScreen}/>
                </View>
              </SafeAreaView>
            </Modal>
          </View>
    
        </SafeAreaView>
      </Fragment>
    );
  }
}



const styles = StyleSheet.create({
  header_appName: {
    fontSize: 35
  },

  header_create_routine: {
    fontSize: 20
  },

  engine: {
    position: 'absolute',
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  row: {
    flexDirection: 'row',
    margin: 10
  },
  widget: {
    flex: 1,
    margin: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
