import React, {useEffect, useState} from 'react';
import { View, Text, Button, TextInput} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Types  from '../types/types'
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'





const TaskComp = ({data, handleDelete}: { data: Types.Task, handleDelete:any }) => {



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





const TaskList = ({data, goalNameId}: {data:Types.Task[], goalNameId:{id:number, name:string}[]}) => {

  const [taskArray, setTaskArray] = useState(data);
  useEffect(() => {
    setTaskArray(data);
  }
  , [data]);
  const [taskName, setTaskName] = useState("");
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [date, setDate] = useState(new Date());
  const [repeat, setRepeat] = useState(false);
  const [frequency, setFrequency] = useState(1);
  const [frequencyType, setFrequencyType] = useState("weekly");
  let i = 0;

  const handleDelete = (index:any) =>{
    const newArray = [...taskArray];
    newArray.splice(index, 1);
    setTaskArray(newArray);
  }
  const handleRepeatChange = () => {
    setRepeat(!repeat);
  };
  const handleCreate = () => {
    if(taskName.length>0 && selectedGoal){
      const newTask: Types.Task = {
        type: "task",
        id: String(i++),
        name: taskName,
        goal: selectedGoal,
        due_date: String(date),
        trophy_date: null,
        repeat: undefined,
        show_in_lobby: true,
        finished: false,
        master: undefined
      }
      setTaskArray([...taskArray, newTask]);
      setTaskName("");
      setSelectedGoal(null);
      setDate(new Date());
      setRepeat(false);
      setFrequency(1);
      setFrequencyType("weekly");
    }
  }



      
  console.log(taskName, selectedGoal, date, repeat, frequency, frequencyType);


  return (
    <View>

      {taskArray.map(task => <TaskComp data={task} handleDelete={()=>handleDelete(taskArray.indexOf(task))} key={task.id}/>)}

      <TextInput
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
        placeholder="Name new Task"
      />

      <Picker
        selectedValue={selectedGoal}
        onValueChange={(itemValue) => setSelectedGoal(itemValue)}
      >
        <Picker.Item label="Select Goal" value={null} />
        {goalNameId.map((goal) => (
          <Picker.Item label={goal.name} value={goal.id} key={goal.id} />
        ))}
      </Picker>
      <Text>Start Date:</Text>
      <DatePicker
        date={date}
        onDateChange={setDate}
        mode="date"
      />
      <BouncyCheckbox text={"Repeat"} onPress={handleRepeatChange} />
      {repeat && (
        <View>
          <Text>Every:</Text>
          <TextInput
            value={frequency.toString()}
            onChangeText={(text) => setFrequency(Number(text))}
            placeholder="Frequency"
            keyboardType="numeric"
          />
          <Picker
            selectedValue={frequencyType}
            onValueChange={(itemValue) => setFrequencyType(itemValue)}
          >
            <Picker.Item label="weekly" value={"weekly"} />
            <Picker.Item label="monthly" value={"monthly"} />
            <Picker.Item label="yearly" value={"yearly"} />
          </Picker>
        </View>
      )}
      <Button onPress={handleCreate} title="Create" />

    </View>
  );
};



export default TaskList;