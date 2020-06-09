import React from "react";
import propTypes from "prop-types";
import {
  ListItem,
  Left,
  Button,
  Text,
  Body,
  Right,
  Icon,
  H3,
} from "native-base";



const Statistic = ({ iconName, title, stat }) => {
  return (
    <ListItem icon>
      <Left>
        <Button style={{ backgroundColor: "#007AFF" }}>
          <Icon active name={iconName} />
        </Button>
      </Left>
      <Body>
        <Text>{title}</Text>
      </Body>
      <Right>
        <H3 style={{ fontWeight: "bold" }}>{stat}</H3>
      </Right>
    </ListItem>
  );
};

Statistic.propTypes = {
  iconName: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  stat: propTypes.string.isRequired,
};

export default Statistic;
