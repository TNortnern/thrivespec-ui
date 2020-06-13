import React from "react";
import { layout } from "../../assets/styles";
import { SafeAreaView } from "react-native-safe-area-context";

const Wrapper = ({children}) => {
  return <SafeAreaView style={layout.droidSafeArea}>{children}</SafeAreaView>;
};

export default Wrapper;
