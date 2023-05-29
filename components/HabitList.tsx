import React, {useEffect, useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import * as Types  from '../types/types'
import CreateHabit from './CreateHabit';





const HabitComp = ({data, handleDelete}: {data: Types.Habit, handleDelete:any}) => {
  


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





const HabitList = ({data, goalNameId}: { data: Types.Habit[],goalNameId: {id: number, name: string}[]}) => {
  const [habitArray, setHabitArray] = useState(data);

  const [showMenu, setShowMenu] = useState(false);

  const handleDelete = (index:any) =>{
    const newArray = [...habitArray];
    newArray.splice(index, 1);
    setHabitArray(newArray);
  }
  const handleCreate = () => { 
  }

  return (
    <View>

      {habitArray.map(habit => <HabitComp data={habit} handleDelete={handleDelete} key={habit.id}/>)}
      <Button title="Add Habit" onPress={()=>setShowMenu(!showMenu)}/>
      {showMenu && (
        <CreateHabit handleCreate={handleCreate} goalNameId={goalNameId} />
      )}

    </View>
  );
};



export default HabitList;