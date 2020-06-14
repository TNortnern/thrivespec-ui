import React from "react";
import { View, Image } from "react-native";
import { Card, CardItem, Body, H2, Text } from "native-base";
import { SimpleLineIcons } from "@expo/vector-icons";
import { utility, layout } from "../../assets/styles";
import { StyleSheet } from "react-native";
import propTypes from "prop-types";
const GroupCard = ({ group }) => {
  return (
    <Card style={styles.cardStyles}>
      <CardItem style={{ borderRadius: 15 }}>
        <Body>
          <View
            style={{ ...utility.w100, alignItems: "flex-end", marginBottom: 8 }}
          >
            <SimpleLineIcons name="options" size={24} color="black" />
          </View>
          <View style={{ ...layout.flexRow }}>
            <View style={{ marginBottom: 5 }}>
              <Image
                source={{
                  uri: "https://i.ytimg.com/vi/VVF3GJPeB0I/maxresdefault.jpg",
                }}
                style={styles.imageStyles}
              />
            </View>
            <View style={{ alignSelf: "center", marginLeft: 19 }}>
              <H2 style={{ fontWeight: "bold", marginBottom: 3 }}>
               { group.name }
              </H2>
            <Text>{ group.members.length } Members</Text>
            </View>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  imageStyles: {
    width: 89,
    height: 89,
    borderRadius: 10,
  },
  cardStyles: {
    elevation: 1,
    paddingHorizontal: 8,
    paddingBottom: 11,
    borderRadius: 15,
    width: '100%'
  },
});

GroupCard.propTypes = {
  group: propTypes.object.isRequired
};

export default GroupCard;
