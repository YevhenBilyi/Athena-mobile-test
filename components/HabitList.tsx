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





const HabitList = ({data, goalNameId}: { data: Types.Habit[],goalNameId: {id: number, name: string}[]}) => {
  const [habitArray, setHabitArray] = useState(data);
  useEffect(() => {
    setHabitArray(data);
  }
  , [data]);

  const [showMenu, setShowMenu] = useState(false);
  let i = 0;

  const handleDelete = (index:any) =>{
    const newArray = [...habitArray];
    newArray.splice(index, 1);
    setHabitArray(newArray);
  }
  const handleCreate = (name,goal,scale,rangeStart,rangeEnd,loop,weekdays,description,date) => { 
    console.log(name,goal,scale,rangeStart,rangeEnd,loop,weekdays,description,date);
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
      const newArray = [...habitArray];
      newArray.push(newHabit);
      setHabitArray(newArray);
      setShowMenu(false);
      i++;
    }
  }

  return (
    <ScrollView>

      {habitArray.map(habit => <HabitComp data={habit} handleDelete={()=>handleDelete(habitArray.indexOf(habit))} key={habit.id}/>)}
      <Button title="Add Habit" onPress={()=>setShowMenu(!showMenu)}/>
      {showMenu && (
        <CreateHabit handleCreate={handleCreate} goalNameId={goalNameId} key={i} />
      )}

    </ScrollView>
  );
};



export default HabitList;