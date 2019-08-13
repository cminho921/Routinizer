import React, {Fragment, useState, Component} from 'react';
import CountDown from 'react-native-countdown-component';
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

import {
  Constants,
} from 'react-native-unimodules';

import RoutineTimer from './RoutineTimer';
// import console = require('console');

const RoutineEntry = (props) => {
  const [timerScreen, setTimerScreen] = useState(false);
  const targetGroup = props.routines.filter(routine => routine.group === props.group);
  let totalTargetSecond = 0;
  let totalTargetHour = 0;
  let totalTargetMinute = 0;
  for (let i = 0; i < targetGroup.length; i++) {
    totalTargetSecond += targetGroup[i].hours * 60 * 60 + targetGroup[i].minutes * 60;
    totalTargetHour += targetGroup[i].hours;
    totalTargetMinute += targetGroup[i].minutes;
  }
  return (
      <View style={styles.container}>
        <View style={styles.row}>
            <TouchableOpacity style={[styles.widget, { backgroundColor: '#ccf' }]} onPress={() => setTimerScreen(true)}>
              <Text>{props.group}</Text>
              <Text>{totalTargetHour}h {totalTargetMinute}m</Text>
            </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={timerScreen}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <SafeAreaView >
            <View>
              <Text>Total routine hour</Text>
              <CountDown
                size={30}
                until={totalTargetSecond}
                onFinish={() => alert('finish')}
                onPress={() => alert('hello')}
                digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
                digitTxtStyle={{color: '#1CC625'}}
                timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                separatorStyle={{color: '#1CC625'}}
                timeToShow={['H', 'M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
              />
              <RoutineTimer routines={targetGroup}/>
              
              <TouchableHighlight onPress={() => setTimerScreen(false)}>
                <Text>Back to main</Text>
              </TouchableHighlight>
            </View>
          </SafeAreaView>
        </Modal>
      </View>
  )
}

export default RoutineEntry;

const styles = StyleSheet.create({
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
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
