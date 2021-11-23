import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

import {myStyle} from './style';

const AddData = () => {
  const [date, setDate] = useState('');
  const [number, setNumber] = useState('');

  return (
    <View style={myStyle.container}>
      <TextInputMask
        style={myStyle.input}
        placeholder="Ajouter la date YYYY/DD/MM"
        onChangeText={() => setDate(date)}
        type={'datetime'}
        options={{
          format: 'YYYY/DD/MM',
        }}
        value={date}
      />

      <TextInput
        style={myStyle.input}
        placeholder="Ajouter la kilometrage"
        onChangeText={() => setNumber(number)}
        defaultValue={number}
        keyboardType={'number-pad'}
      />

      <TouchableOpacity style={myStyle.submitButton} onPress={() => {}}>
        <Text style={myStyle.submitButtonText}> Ajouter </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddData;
