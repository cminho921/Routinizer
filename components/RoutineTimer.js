import React, {Fragment, useState} from 'react';
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

const RoutineTimer = (props) => {
  const [currentTimer, setCurrentTimer] = useState(0);
  return (
    props.routines.map((routine, key) => (
      <View>
        <Text>{routine.name}</Text>
        <CountDown
          key={key}
          size={30}
          until={routine.hours * 60 * 60 + routine.minutes * 60}
          onFinish={() => setCurrentTimer(currentTimer + 1)}
          onPress={() => alert('hello')}
          digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
          digitTxtStyle={{color: '#1CC625'}}
          timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
          separatorStyle={{color: '#1CC625'}}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{m: null, s: null}}
          showSeparator
          running={key === currentTimer}
        />
        <Text>{routine.description}</Text>
      </View>
    ))
  )
}

export default RoutineTimer;
