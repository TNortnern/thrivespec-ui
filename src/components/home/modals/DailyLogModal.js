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
import { H1, Header, Title, Left, Right, Radio, ListItem } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { Button, CheckBox } from 'react-native-elements';
import EditLogModal from './EditLogModal';
import { layout } from '../../../assets/styles';

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
        <View style={layout.container}>
          <H1 style={{ fontWeight: 'bold' }}>Today</H1>
          <Text style={{ fontSize: 20 }}>Did you eat meat?</Text>

          <TouchableOpacity
            style={{
              marginTop: 15,
              flexDirection: 'row',
            }}
            onPress={() => radioYes()}
          >
            <Radio
              style={{ marginRight: 15 }}
              color='orange'
              selected={yesIsChecked}
              onPress={() => radioYes()}
            />
            <Text style={{ fontSize: 20 }}>Yes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
            }}
            onPress={() => radioNo()}
          >
            <Radio
              style={{ marginRight: 15 }}
              color='orange'
              selected={noIsChecked}
              onPress={() => radioNo()}
            />
            <Text style={{ fontSize: 20 }}>No</Text>
          </TouchableOpacity>

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
