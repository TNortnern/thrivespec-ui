import React from "react";
import { Image } from "react-native";
import TextCTA from "./TextCTA";
const WeeklyGoal = () => {
  return (
    <>
    <TextCTA title="Weekly Goal" cta={{ name: 'View Details' }} />
      <Image
        source={{
          uri:
            "http://www.cashadvance6online.com/data/archive/img/1563287128.png",
        }}
        style={{ width: "100%", height: 298 }}
      />
    </>
  );
};

export default WeeklyGoal;
