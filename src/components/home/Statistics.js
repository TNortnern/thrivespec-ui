import React from 'react'
import { List } from 'native-base'
import Statistic from "./Statistic";
import TextCTA from './TextCTA';

const Statistics = () => {
  return (
    <>
      <TextCTA title="Your Impact" cta={{ name: "View More" }} />
      <List style={{ paddingBottom: 80 }}>
        <Statistic iconName="wifi" title="Cows Saved" stat="10 Moos" />
        <Statistic iconName="wifi" title="Cows Saved" stat="10 Moos" />
        <Statistic iconName="wifi" title="Cows Saved" stat="10 Moos" />
        <Statistic iconName="wifi" title="Cows Saved" stat="10 Moos" />
      </List>
    </>
  );
};

export default Statistics;
