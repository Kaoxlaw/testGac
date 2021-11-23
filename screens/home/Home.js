import React from 'react';
import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {homeStyle} from './style';

const Home = ({navigation}) => {
  const customData = require('../../mileage_readings.json');
  const goToAddData = () => navigation.navigate('data');

  const renderItem = ({item}) => (
    <Text style={homeStyle.item} key={item.id}>
      Issued on : {item.issued_on} - Value : {item.value} Km
    </Text>
  );

  return (
    <SafeAreaView style={homeStyle.container}>
      <View>
        <FlatList
          style={homeStyle.listItem}
          data={customData.mileage_readings}
          renderItem={renderItem}
        />
      </View>
      <View>
        <TouchableOpacity
          style={homeStyle.submitButton}
          title="Ajouter des datas"
          onPress={goToAddData}>
          <Text style={homeStyle.submitButtonText}>Ajouter Data</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
