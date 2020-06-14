import React from "react";
import { Text } from "native-base";
import Wrapper from "../components/misc/Wrapper";
import { Image, StyleSheet, View } from "react-native";
import PageTitle from "../components/misc/PageTitle";
import { layout, colors } from "../assets/styles";
import Stats from "../components/home/Stats";
import { ScrollView } from "react-native-gesture-handler";
import TextCTA from "../components/home/TextCTA";

const Account = () => {
  const commonMargin = 16;
  return (
    <Wrapper>
      {/* <Text style={styles.closeText}>Close</Text> */}
      <Image
        source={{
          uri: "https://thispersondoesnotexist.com/image",
        }}
        style={{ width: "100%", height: 298 }}
      />
      <ScrollView style={{ ...layout.container, marginTop: commonMargin }}>
        <PageTitle title="michellek1995" />
        <Text
          style={{
            color: colors.gray,
            fontSize: 22,
            marginVertical: commonMargin,
          }}
        >
          Michelle Kim
        </Text>
        <View style={{ marginBottom: commonMargin }}>
          <Stats />
        </View>
        <TextCTA title="About" cta={{ name: "More" }} />
        <Text style={{ fontSize: 19 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eligendi
          cum odio, consequatur incidunt enim. Reprehenderit ratione laudantium
          distinctio doloremque, nostrum natus iure ut dolorem nisi. Id unde aut
          perspiciatis!
        </Text>
        <TextCTA title="Groups" cta={{ name: "View" }}></TextCTA>
        <View style={{ paddingBottom: commonMargin }}>
          <TextCTA title="Liked Recipes" cta={{ name: "View" }}></TextCTA>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  closeText: {
    color: "white",
    fontSize: 23,
    position: "absolute",
    right: 12,
    top: 80,
    zIndex: 99,
    fontWeight: "bold",
  },
});

export default Account;
