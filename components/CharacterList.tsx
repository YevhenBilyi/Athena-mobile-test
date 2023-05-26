import React, {useEffect, useState} from 'react';
import { View, Text, Button } from 'react-native';
import * as Types  from '../types/types'





const CharacterComp = (props: { data: Types.Character }) => {

  const handleDelete = () => {
    // Handle delete logic
  };

  const handlePress = () => {
    // take to the goal
  };

  return (
    <View>
      <Button onPress={handlePress} title={props.data.name} />
      <View>
        <Button onPress={handleDelete} title="trash" />
      </View>
    </View>
  );
};





const CharacterList = (props: { data: Types.Character[]}) => {


  return (
    <View>

      {props.data.map(goal => <CharacterComp data={goal} key={goal.id}/>)}

    </View>
  );
};



export default CharacterList;