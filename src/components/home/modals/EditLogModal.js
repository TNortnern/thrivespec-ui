import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { Divider } from 'react-native-elements';
import {
  Container,
  Content,
  H1,
  Header,
  Title,
  Left,
  Right,
  Body,
  Radio,
  ListItem,
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { Button, CheckBox } from 'react-native-elements';

const EditLogModal = ({ editLogModal, setEditLogModal }) => {
  return (
    <View>
      {console.log('test', editLogModal)}
      <Modal animationType={'fade'} visible={editLogModal}>
        <Header style={styles.header}>
          <Button
            titleStyle={{ color: 'white' }}
            title='Cancel'
            type='outline'
            buttonStyle={{ width: 75 }}
            onPress={() => setEditLogModal(false)}
          />

          <Title>Edit Log</Title>

          <Button
            titleStyle={{ color: 'white' }}
            title='Done'
            type='outline'
            buttonStyle={{ width: 75 }}
            onPress={() => setEditLogModal(false)}
          />
        </Header>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  headerButtons: {
    color: 'white',
  },
  test: {
    color: 'darkslateblue',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default EditLogModal;
