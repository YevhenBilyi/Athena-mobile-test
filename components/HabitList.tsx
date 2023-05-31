import React, {useEffect, useState} from 'react';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
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





const HabitList = ({data, goalNameId, handleCreateGeneric, handleDeleteHabit}:
   { data: Types.Habit[],goalNameId: {id: number, name: string}[], handleCreateGeneric:any, handleDeleteHabit:any}) => {
  const [habitArray, setHabitArray] = useState(data);
  useEffect(() => {
    setHabitArray(data);
  }
  , [data]);

  const [showMenu, setShowMenu] = useState(false);
  const [i, setI] = useState(1);

  const handleDelete = (habitId:string, goalId:Number) =>{
    handleDeleteHabit(habitId, goalId, "habit");

  }
  const handleCreate = (name,goal,scale,rangeStart,rangeEnd,loop,weekdays,description,date) => { 
    
    if(name.length>0 && goal && scale && loop){
      const newLoop: Types.HabitLoop = {type: loop}
      if (loop === "weekly" ){
        const newLoop: Types.HabitLoop = {type: loop, days: weekdays}
      }
      const newScale: Types.HabitScale = {type: scale}
      if(scale === "range"){
        newScale.range = {min: rangeStart, max: rangeEnd}
      }
      const newHabit: Types.Habit = {
        name: name,
        goal: goal,
        scale: newScale,
        loop: newLoop,
        description: description,
        start_date: date,
        id: i.toString(),
        type: "habit",
        show_in_lobby: true
      }
      setShowMenu(false);
      setI(i+1);
      handleCreateGeneric(newHabit, goal, "habit");
    }
  }

  return (
    <ScrollView>

      {habitArray.map(habit => <HabitComp data={habit} handleDelete={()=>handleDelete(habit.id,habit.goal)} key={habit.id}/>)}
      <Button title="Add Habit" onPress={()=>setShowMenu(!showMenu)}/>
      {showMenu && (
        <CreateHabit handleCreate={handleCreate} goalNameId={goalNameId} key={i} />
      )}

    </ScrollView>
  );
};



export default HabitList;