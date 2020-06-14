import React from "react";
import { layout } from "../../assets/styles";
import { SafeAreaView } from "react-native-safe-area-context";

const Wrapper = ({children, noMargin}) => {
  const margin = noMargin ? { marginTop: 0 } : layout.droidSafeArea
  return <SafeAreaView style={margin}>{children}</SafeAreaView>;
};

export default Wrapper;
