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
import EditLogModal from './EditLogModal';

const DailyLogModal = ({ modalOpen, setModalOpen }) => {
  const [yesIsChecked, setYesIsChecked] = useState(false);
  const [noIsChecked, setNoIsChecked] = useState(false);

  const [editLogModal, setEditLogModal] = useState(false);

  const radioYes = () => {
    setYesIsChecked(true);
    setNoIsChecked(false);
  };

  const radioNo = () => {
    setYesIsChecked(false);
    setNoIsChecked(true);
  };

  return (
    <View>
      <Modal animationType={'slide'} visible={modalOpen}>
        <Header style={styles.header}>
          <Button
            titleStyle={{ color: 'white' }}
            title='Cancel'
            type='outline'
            buttonStyle={{ width: 75 }}
            onPress={() => setModalOpen(false)}
          />

          <Title>Daily Log</Title>

          <Button
            titleStyle={{ color: 'white' }}
            title='Done'
            type='outline'
            buttonStyle={{ width: 75 }}
            onPress={() => setModalOpen(false)}
          />
        </Header>
        <View>
          <H1>Today</H1>
          <Text>Did you eat meat?</Text>

          <ListItem onPress={() => radioYes()}>
            <Radio
              style={{ marginRight: 10 }}
              color='orange'
              selected={yesIsChecked}
              onPress={() => radioYes()}
            />
            <Text>Yes</Text>
          </ListItem>

          <ListItem onPress={() => radioNo()}>
            <Radio
              style={{ marginRight: 10 }}
              color='orange'
              selected={noIsChecked}
              onPress={() => radioNo()}
            />
            <Text>No</Text>
          </ListItem>
        </View>

        <EditLogModal
          editLogModal={editLogModal}
          setEditLogModal={setEditLogModal}
        />

        <View style={{ marginTop: 200 }}>
          <Divider />
          <TouchableOpacity
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingTop: 10,
              paddingBottom: 10,
            }}
            onPress={() => {
              setEditLogModal(true);
              console.log(true);
            }}
          >
            <Text style={{ fontSize: 24, flexWrap: 'nowrap' }}>
              Edit Previous Logs
            </Text>

            <AntDesign name='right' size={24} color='black' />
          </TouchableOpacity>
        </View>
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

export default DailyLogModal;
