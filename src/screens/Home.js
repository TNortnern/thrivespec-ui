import React from "react";
import { View, ScrollView } from "react-native";
import {
  Content,
  H1,
} from "native-base";
import { Button } from "react-native-elements";
import { layout, colors, utility } from "../assets/styles";
import { Entypo } from "@expo/vector-icons";
import Stats from "../components/home/Stats";
import Statistics from "../components/home/Statistics";
import WeeklyGoal from "../components/home/WeeklyGoal";
import propTypes from 'prop-types'
import PageTitle from "../components/misc/PageTitle";



const Home = ({ navigation }) => {
  return (
    <>
      <ScrollView style={layout.container}>
        <Content>
          <PageTitle title="Hi Michelle" />
          <Stats />
          <WeeklyGoal />
          <Statistics />
        </Content>
      </ScrollView>
      <View
        style={{
          alignItems: "flex-end",
          ...utility.w100,
          backgroundColor: "rgba(0, 0, 0, 0)",
          position: "absolute",
          bottom: 5,
        }}
      >
        <Button
          onPress={() => navigation.navigate("Details")}
          icon={<Entypo name="plus" size={24} color="white" />}
          titleStyle={{ marginLeft: 10 }}
          title="LOG"
          buttonStyle={{
            backgroundColor: colors.orange,
            borderRadius: 100,
            width: 106,
            padding: 13,
          }}
        />
      </View>
    </>
  );
};

Home.propTypes = {
  navigation: propTypes.object,
};


export default Home;
