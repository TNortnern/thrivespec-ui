import React from 'react';
import { ScrollView } from 'react-native';
import PageTitle from '../components/misc/PageTitle';
import { layout, colors, input } from '../assets/styles';
import { Item, Icon, Input, Button, Text } from 'native-base';
import RecipeCard from '../components/recipes/RecipeCard';
import { FlatList } from 'react-native-gesture-handler';

const Recipes = () => {
  const filterButtons = [
    'All',
    'Entrees',
    'Sides',
    'Soups',
    'Salads',
    'Sandwiches',
  ];
  return (
    <ScrollView style={layout.container}>
      <PageTitle title='Explore Vegan Food' />
      <Item style={input.search} rounded>
        <Icon name='ios-search' />
        <Input
          style={{ fontSize: 20, color: colors.gray }}
          placeholder='Search Recipes'
        />
        <Icon name='ios-people' />
      </Item>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ ...layout.flexRow }}
      >
        {filterButtons.map((item) => (
          <>
            <Button key={item} style={{ marginRight: 10 }} bordered info>
              <Text style={{ fontWeight: 'bold' }}>{item}</Text>
            </Button>
          </>
        ))}
      </ScrollView>
      <FlatList
        style={{ marginTop: 10, paddingBottom: 30 }}
        data={filterButtons}
        numColumns={2}
        keyExtractor={(item) => item}
        renderItem={() => <RecipeCard />}
      />
    </ScrollView>
  );
};

export default Recipes;
