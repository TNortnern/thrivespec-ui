import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import { layout } from '../../assets/styles';
import Stat from './Stat';

const Stats = () => {
  return (
    <Card style={{ paddingHorizontal: 20 }}>
      <CardItem>
        <Body>
          <View style={styles.cardRow}>
            <Stat name='Meat-Free Total' amount={216} />
            <Stat name='This Week!' amount={5} />
          </View>
          <View style={styles.cardRow}>
            <Stat name='Current Streak' amount={8} />
            <Stat name='Best Streak' amount={12} />
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardRow: {
    ...layout.fullFlexRow,
    marginVertical: 13,
  },
});

export default Stats;
