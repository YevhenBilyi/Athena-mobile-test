import React, {useEffect, useState} from 'react';
import { View, Text, Button } from 'react-native';
import * as Types  from '../types/types';



const GoalComp = (props: { data: Types.Goal }) => {
  const url = `/goal/${props.data.id}/`;

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





const GoalList = (props: { data: Types.Goal[]}) => {


  return (
    <View>

      {props.data.map(goal => <GoalComp data={goal} key={goal.id}/>)}

    </View>
  );
};



export default GoalList;