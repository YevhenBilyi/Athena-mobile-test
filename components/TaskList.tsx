import React, {useEffect, useState} from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import * as Types  from '../types/types'





const TaskComp = (props: { data: Types.Task }) => {
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





const TaskList = (props: { data: Types.Task[]}) => {


  return (
    <View>

      {props.data.map(goal => <TaskComp data={goal} key={goal.id}/>)}

    </View>
  );
};



export default TaskList;