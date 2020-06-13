import React from "react";
import { View } from "react-native";
import { H2, Text } from "native-base";
import { layout, colors } from "../../assets/styles";
import propTypes from "prop-types";



const TextCTA = ({ title, cta }) => {
  return (
    <View style={{ ...layout.fullFlexRow, marginTop: 19, marginBottom: 12 }}>
      <H2 style={{ fontWeight: "bold" }}>{title}</H2>
      <Text onPress={() => cta.action} style={{ color: colors.gray, fontSize: 19 }}>
        {cta.name}
      </Text>
    </View>
  );
};

TextCTA.propTypes = {
  cta: propTypes.object.isRequired,
  title: propTypes.string.isRequired,
};

export default TextCTA;
