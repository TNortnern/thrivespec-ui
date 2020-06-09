import React from "react";
import { ScrollView, View } from "react-native";
import { Icon, Input, Item, H2, Text } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { layout, colors, input } from "../assets/styles";
import { StyleSheet } from "react-native";
import GroupCard from "../components/mygroups/GroupCard";
import PageTitle from "../components/misc/PageTitle";

const MyGroups = () => {
  return (
    <ScrollView style={layout.container}>
      <PageTitle title="Find Groups" />
      <Item style={input.search} rounded>
        <Icon name="ios-search" />
        <Input
          style={{ fontSize: 20, color: colors.gray }}
          placeholder="Search for a group"
        />
        <Icon name="ios-people" />
      </Item>
      <H2 style={{ fontWeight: "bold", marginBottom: 15 }}>Joined Groups</H2>
      <GroupCard
        group={{ name: "Fish Are Friends", members: { length: 16 } }}
      />
      <View style={{ ...layout.flexRowCenter, marginTop: 35 }}>
        <Entypo
          name="plus"
          size={20}
          color={colors.orange}
          style={{ alignSelf: "center", marginRight: 5 }}
        />
        <Text
          style={{
            color: colors.orange,
            fontSize: 20,
            textTransform: "uppercase",
          }}
        >
          Create Group
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchStyles: {
    backgroundColor: "rgba(142,142,147,0.12)",
    paddingHorizontal: 15,
    marginTop: 15,
    marginBottom: 31
  },
});

export default MyGroups;
