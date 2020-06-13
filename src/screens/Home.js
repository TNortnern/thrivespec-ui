import React, { useState } from 'react';
import { View, ScrollView, Text, Modal, StyleSheet, StatusBar } from 'react-native';
import {
  Container,
  Content,
  H1,
  Header,
  Title,
  Left,
  Right,
  Body,
} from 'native-base';
import { Button } from 'react-native-elements';
import { layout, colors, utility } from '../assets/styles';
import { Entypo } from '@expo/vector-icons';
import Stats from '../components/home/Stats';
import Statistics from '../components/home/Statistics';
import WeeklyGoal from '../components/home/WeeklyGoal';
import propTypes from 'prop-types';
import PageTitle from '../components/misc/PageTitle';
import DailyLogModal from '../components/home/modals/DailyLogModal';

const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <DailyLogModal modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <ScrollView style={{ ...layout.container, paddingTop: StatusBar.currentHeight }}>
        <Content>
          <PageTitle title='Hi Michelle' />
          <Stats />
          <WeeklyGoal />
          <Statistics />
        </Content>
      </ScrollView>
      <View style={styles.btnContainer}>
        <Button
          onPress={() => setModalOpen(true)}
          icon={<Entypo name='plus' size={24} color='white' />}
          titleStyle={{ marginLeft: 10 }}
          title='LOG'
          buttonStyle={styles.logBtn}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'flex-end',
    ...utility.w100,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    bottom: 5,
  },
  logBtn: {
    backgroundColor: colors.orange,
    borderRadius: 100,
    width: 106,
    padding: 13,
  },
});

Home.propTypes = {
  navigation: propTypes.object,
};

export default Home;
