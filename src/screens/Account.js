import React from "react";
import { Text } from "native-base";
import Wrapper from "../components/misc/Wrapper";
import { Image, StyleSheet, View } from "react-native";
import PageTitle from "../components/misc/PageTitle";
import { layout, colors } from "../assets/styles";

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
      <View style={{ ...layout.container, marginTop: commonMargin }}>
        <PageTitle title="michellek1995" />
        <Text style={{ color: colors.gray, fontSize: 22, marginBottom: commonMargin }}>Michelle Kim</Text>
      </View>
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
