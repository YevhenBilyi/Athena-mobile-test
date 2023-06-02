import React, {useEffect, useState} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HabitList from './HabitList';
import TaskList from './TaskList';
import CharacterList from './CharacterList';
import { createStackNavigator } from '@react-navigation/stack';
import * as Types  from '../types/types';
import HabitlogList from './HabitlogList';



const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({data,handleCreateGeneric, handleDeleteGeneric}:
     { data: Types.Goal[], handleCreateGeneric:any, handleDeleteGeneric:any }) => {

    const [goals, setGoals] = useState(data);
    useEffect(() => {
        setGoals(data);
        
    }
    , [data]);

    let goalNameId= new Array <{name: string, id: number}>();
    let habits = new Array <Types.Habit>; 
    let characters = new Array <Types.Character>;
    let tasks = new Array <Types.Task>;
    for (let i = 0; i<goals.length; i++){
        habits = [...habits,...goals[i].habits];
        characters = [...characters,...goals[i].characters];
        tasks = [...tasks, ...goals[i].tasks];
        goalNameId.push({name: goals[i].name, id: goals[i].id});

    }
    const Stack = createStackNavigator();
        
    return (
    <Tab.Navigator screenOptions={{}} >
        
        <Tab.Screen name="Habits">
            {() =>
            <Stack.Navigator>
                <Stack.Screen name="Habit list">
                    {() =><HabitList data = {habits} goalNameId={goalNameId}
                    handleCreateGeneric={handleCreateGeneric} handleDeleteHabit={handleDeleteGeneric} />}
                </Stack.Screen>
                <Stack.Screen name="HabitlogList"
                 component={HabitlogList} initialParams={{habitName:"None", habitId:"None"}}/>
            </Stack.Navigator>}
        </Tab.Screen>
        <Tab.Screen name="Tasks">
            {() => <TaskList data = {tasks} goalNameId={goalNameId}
            handleCreateGeneric={handleCreateGeneric} handleDeleteTask={handleDeleteGeneric} />}
        </Tab.Screen>
        <Tab.Screen name="Characters">
            {() => <CharacterList data={characters} goalNameId={goalNameId}
            handleCreateGeneric={handleCreateGeneric} handleDeleteCharacter={handleDeleteGeneric} />}
        </Tab.Screen>
    </Tab.Navigator>
    );
};



export default HomeScreen;