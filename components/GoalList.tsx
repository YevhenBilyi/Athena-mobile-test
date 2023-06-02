import React, {useEffect, useState} from 'react';
import { View, Text, Button } from 'react-native';
import * as Types  from '../types/types';
import { TextInput } from 'react-native-gesture-handler';



const GoalComp = ({data, handleDelete}: { data: Types.Goal,handleDelete:any }) => {


  const handlePress = () => {
    // take to the goal
  };

  return (
    <View>
      <Button onPress={handlePress} title={data.name} />
      <View>
        <Button onPress={handleDelete} title="trash" />
      </View>
    </View>
  );
};





const GoalList = ({data, handleDelete, handleCreate}: { data: Types.Goal[], handleDelete:any, handleCreate:any}) => {

  const [goalName, setGoalName] = useState("");



  return (
    <View>

      {data.map(goal => <GoalComp data={goal} handleDelete={()=>handleDelete(goal.id)}key={goal.id}/>)}
      <TextInput
        placeholder="Name new Goal"
        value={goalName}
        onChangeText={(text) => setGoalName(text)}
      />
      <Button onPress={()=>handleCreate(goalName)} title="Create Goal" />



    </View>
  );
};



export default GoalList;