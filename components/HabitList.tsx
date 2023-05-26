import React, {useEffect, useState} from 'react';
import { View, Text, Button } from 'react-native';
import * as Types  from '../types/types'





const HabitComp = (props: { data: Types.Habit }) => {
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





const HabitList = (props: { data: Types.Habit[]}) => {


  return (
    <View>

      {props.data.map(goal => <HabitComp data={goal} key={goal.id}/>)}

    </View>
  );
};



export default HabitList;