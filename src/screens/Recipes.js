import React from "react";
import { ScrollView, View } from "react-native";
import PageTitle from "../components/misc/PageTitle";
import { layout, colors, input } from "../assets/styles";
import { Item, Icon, Input, Button, Text } from "native-base";
import RecipeCard from "../components/recipes/RecipeCard";
import { FlatList } from "react-native-gesture-handler";
import Wrapper from "../components/misc/Wrapper";

const Recipes = () => {
  const filterButtons = [
    "All",
    "Entrees",
    "Sides",
    "Soups",
    "Salads",
    "Sandwiches",
  ];
  return (
    <Wrapper>
      <View style={layout.container}>
       
        <View>
          <FlatList
          ListHeaderComponent={
            <>
             <PageTitle title="Explore Vegan Food" />
        <Item style={input.search} rounded>
          <Icon name="ios-search" />
          <Input
            style={{ fontSize: 20, color: colors.gray }}
            placeholder="Search Recipes"
          />
          <Icon name="ios-people" />
        </Item>
        <View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ ...layout.flexRow }}
          >
            {filterButtons.map((item) => (
              <Button key={item} style={{ marginRight: 10 }} bordered info>
                <Text style={{ fontWeight: "bold" }}>{item}</Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        </>
          }
            style={{ marginTop: 10, paddingBottom: 30 }}
            data={filterButtons}
            numColumns={2}
            keyExtractor={(item, index) => index}
            nestedScrollEnabled
            renderItem={() => <RecipeCard />}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default Recipes;
