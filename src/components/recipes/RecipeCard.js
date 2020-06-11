import React from 'react';
import { Card, CardItem, Text, Body } from 'native-base';
import { Image, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { layout } from '../../assets/styles';

const RecipeCard = () => {
  const textMarginRight = 2;
  return (
    <Card style={{ maxWidth: '48%', flex: 1 }}>
      <CardItem cardBody>
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1529907789406-c4651fc0b919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          }}
          style={{ height: 178, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>My Recipe</Text>
          <View style={{ ...layout.flexRow, marginTop: 12, paddingBottom: 10 }}>
            <Text style={{ marginRight: textMarginRight }}>45 Min</Text>
            <Entypo
              style={{ marginRight: textMarginRight }}
              name='dot-single'
              size={20}
              color='black'
            />
            <Text style={{ marginRight: textMarginRight }}>400 Cal</Text>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};

export default RecipeCard;
