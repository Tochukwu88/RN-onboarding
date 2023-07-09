import {Pressable, Text, View} from 'react-native';
import React from 'react';

function Home({navigation}): JSX.Element {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('Details')}>
        <Text>Home</Text>
      </Pressable>
    </View>
  );
}

export default Home;
