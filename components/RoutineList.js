import React, {Fragment, useState, Component} from 'react';
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
import RoutineEntry from './RoutineEntry'

const RoutineList = (props) => {
  return (
    <View style={styles.row}>
      {props.groupNameList.map((group, key) => (
        <RoutineEntry key={key} group={group} routines={props.routines}/>
      ))}
    </View>
  )
}

export default RoutineList;

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
  }
});
