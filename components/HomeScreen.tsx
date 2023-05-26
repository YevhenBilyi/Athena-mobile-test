import React, {useEffect, useState} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HabitList from './HabitList';
import TaskList from './TaskList';
import CharacterList from './CharacterList';
import * as Types  from '../types/types';



const Tab = createMaterialTopTabNavigator();

const HomeScreen = (props: { data: Types.Goal[] }) => {
    const goals = props.data;
    let habits = new Array <Types.Habit>; 
    let characters = new Array <Types.Character>;
    let tasks = new Array <Types.Task>;
    for (let i = 0; i<goals.length; i++){
        habits = [...habits,...goals[i].habits];
        characters = [...characters,...goals[i].characters];
        tasks = [...tasks, ...goals[i].tasks];
    }
        
    return (
    <Tab.Navigator screenOptions={{}} >
        
        <Tab.Screen name="Habits">
            {() => <HabitList data = {habits} />}
        </Tab.Screen>
        <Tab.Screen name="Tasks">
            {() => <TaskList data = {tasks} />}
        </Tab.Screen>
        <Tab.Screen name="Characters">
            {() => <CharacterList data = {characters} />}
        </Tab.Screen>
    </Tab.Navigator>
    );
};



export default HomeScreen;