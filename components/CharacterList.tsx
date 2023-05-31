import React, {useEffect, useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import * as Types  from '../types/types'
import { Picker } from '@react-native-picker/picker';





const CharacterComp = ({ data, handleDelete }: {data:Types.Character, handleDelete:any}) => {


  const handlePress = () => {
    // take to the goal
  };

  return (
    <View>
      <Button onPress={handlePress} title={data.name} />
      <View>
        <Button onPress={handleDelete} title="Delete" />
      </View>
    </View>
  );
};





const CharacterList = ({ data, goalNameId}:{data:Types.Character[], goalNameId: {id: number, name: string}[]} ) => {
  const [characterArray, setCharacterArray] = useState(data);
  useEffect(() => {
    setCharacterArray(data);
  }
  , [data]);
  const [newCharacterName, setNewCharacterName] = useState("");
  const [selectedGoal, setSelectedGoal] = useState(null);
  
  const handleDelete = (index:any) =>{
    const newArray = [...characterArray];
    newArray.splice(index, 1);
    setCharacterArray(newArray);
  }
  const handleCreate = () => {
    if(newCharacterName.length>0 && selectedGoal){
      const newCharacter: Types.Character = {
        goal: selectedGoal,
        name: newCharacterName,
        show_in_lobby: true,
        id: "1",
        type: "character"
      }
      const newArray = [...characterArray];
      newArray.push(newCharacter);
      setCharacterArray(newArray);
      setNewCharacterName("");
      
    }
  }

  return (
    <View>

      {characterArray.map(character => <CharacterComp data={character} handleDelete={()=>handleDelete(characterArray.indexOf(character))} key={character.id}/>)}
      <TextInput
        value={newCharacterName}
        onChangeText={(text)=>setNewCharacterName(text)}
        placeholder="New Character"
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

      <Button title="Create" onPress={handleCreate}/>
    </View>
  );
};



export default CharacterList;