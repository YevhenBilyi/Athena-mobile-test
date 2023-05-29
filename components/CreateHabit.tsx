import React,{useState} from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Picker } from '@react-native-picker/picker';

const CreateHabit = ({handleCreate,goalNameId}:{ handleCreate:any, goalNameId: {id: number, name: string}[]}) => {

    const [newHabitName, setNewHabitName] = useState("");
    const [selectedGoal, setSelectedGoal] = useState(null);
    const [selectedScale, setSelectedScale] = useState(null);
    const [rangeStart, setRangeStart] = useState(0);
    const [rangeEnd, setRangeEnd] = useState(0);
    const [selectedLoop, setSelectedLoop] = useState(null);
    const [weekDays, setWeekDays] = useState([]);

    const allDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    console.log(weekDays)
    const handleScaleChange = (itemValue:any) => {
        setSelectedScale(itemValue);
        }
    const handleLoopChange = (itemValue:any) => {
        setSelectedLoop(itemValue);
    };
    

  return (
    <View>

        {/* Input of new habit name */}
    <TextInput
      value={newHabitName}
      onChangeText={(text:any)=>setNewHabitName(text)}
      placeholder='New Habit'
    />

    {/* Choose one of the existing goals */}
    <Picker
        selectedValue={selectedGoal}
        onValueChange={(itemValue) => setSelectedGoal(itemValue)}
    >
        <Picker.Item label="Select Goal" value={null} />
        {goalNameId.map((goal) => (
          <Picker.Item label={goal.name} value={goal.id} key={goal.id} />
        ))}
    </Picker>

    {/*Select one type of scale  */}
    <Picker
        selectedValue={selectedScale}
        onValueChange={(value) => handleScaleChange(value)}
      >
        <Picker.Item label="Boolean" value="boolean" />
        <Picker.Item label="Range" value="range" />
        <Picker.Item label="Numeric" value="numeric" />
    </Picker>
    {selectedScale === "range" && (
        <View>
          <Text>Range Start:</Text>
          <TextInput 
            value={String(rangeStart)}
            onChangeText={(text)=>setRangeStart(Number(text))}
            keyboardType="numeric"
          />

          <Text>Range End:</Text>
          <TextInput 
            value={String(rangeEnd)}
            onChangeText={(text)=>setRangeEnd(Number(text))}
            keyboardType="numeric"
          />
        </View>
    )}

    {/* Select type of loop */}
    <Picker
        selectedValue={selectedLoop}
        onValueChange={(value) => handleLoopChange(value)}
      >
        <Picker.Item label="Daily" value="daily" />
        <Picker.Item label="Routine" value="routine" />
    </Picker>
    {selectedLoop === "routine" && (
        <View>
            {allDays.map((day) => (
                <BouncyCheckbox
                text={day}
                onPress={(isChecked:boolean) => {
                    if (isChecked) {
                        setWeekDays([...weekDays, day]);
                    } else {
                        setWeekDays(weekDays.filter((d) => d !== day));
                    }
                }}
                />
            ))}

        </View>

    )}
{/* need to create handleCreate function */}
    <Button title="Create" onPress={()=>handleCreate()}/>
  </View>
  );
};

export default CreateHabit;