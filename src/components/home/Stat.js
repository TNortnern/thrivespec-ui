import React from 'react';
import { View } from 'react-native';
import { Text, H2 } from 'native-base';
import propTypes from 'prop-types';

const Stat = ({ name, amount }) => {
  return (
    <View>
      <Text>{name} </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <H2 style={{ marginTop: 5, fontWeight: 'bold' }}>{amount}</H2>
        <Text style={{ fontSize: 20 }}>d</Text>
      </View>
    </View>
  );
};

Stat.propTypes = {
  name: propTypes.string.isRequired,
  amount: propTypes.number.isRequired,
};

export default Stat;
