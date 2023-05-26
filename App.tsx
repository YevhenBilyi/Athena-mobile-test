import React from 'react';
import GoalList from './components/GoalList';
import HomeScreen from './components/HomeScreen';
import Logout from './components/Logout';
import Compass from './components/Compass';
import Profile from './components/Profile';
import Shared from './components/Shared'
import Assignments from './components/Assignments';
import Trophies from './components/Trophies';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as Types  from './types/types';



//  habit example
const testHabitLoop: Types.HabitLoop={  type:"daily"}
const testHabitScale: Types.HabitScale={  type:"boolean"}

const testHabit: Types.Habit={
  description: "my habbit example",
  type: 'habit',
  goal: 61,
  id: "123",
  loop: testHabitLoop,
  name: "habitExample1",
  scale: testHabitScale,
  show_in_lobby: true,
  start_date: "2023-05-17"
}
const arrayOfHabits = [testHabit]

// task example
const testTask: Types.Task={
  due_date: "2023-05-17",
  trophy_date: null,
  type: 'task',
  goal: 61,
  id: "1",
  name: "taskExample1",
  show_in_lobby: true,
  finished: false
}
const arrayOfTasks = [testTask]

// character example
const testCharacter: Types.Character={
  goal: 61,
  type: 'character',
  id: "11",
  name: "characterExample",
  show_in_lobby: true
}

//generic example
const testGeneric: Types.Generic={
  goal: 61,
  type: 'generic',
  id: "1234",
  name: "genericExample",
  show_in_lobby: true
}

// sheet example
const testSheet: Types.Sheet={
  attribute_name: "status",
  content: "status sheet",
  created_on: "2023-05-17",
  id: 1,
  info: "info sheet",
  is_active: true,
  is_deleted: false,
  sheet_name: "test sheet"
}

// goal example
const testGoal: Types.Goal={
  goalitems: arrayOfHabits,
  habits: arrayOfHabits,
  tasks: arrayOfTasks,
  characters: [testCharacter],
  generics: [testGeneric],
  id: 61,
  is_deleted: false,
  is_active: true,
  lobby_personal: false,
  lobby_values: true,
  itemorder: null,
  name: "goalExample",
  sheets: [testSheet]
}
const arrayOfGoals = [testGoal]

const Drawer = createDrawerNavigator();



function App(){

  return (
    <NavigationContainer>
      <Drawer.Navigator>

        <Drawer.Screen name="Home">
          {() => <HomeScreen data = {arrayOfGoals} />}
        </Drawer.Screen>
        <Drawer.Screen name="Goals" >
          {() => <GoalList data = {arrayOfGoals} />}
        </Drawer.Screen>
        <Drawer.Screen name="Trophies" component={Trophies}/>
        <Drawer.Screen name="Assignments" component={Assignments}/>
        <Drawer.Screen name="Shared" component={Shared}/>
        <Drawer.Screen name="Profile" component={Profile}/>
        <Drawer.Screen name="Compass" component={Compass}/>
        <Drawer.Screen name="Logout" component={Logout}/>
        
      </Drawer.Navigator>



    </NavigationContainer>





  );
}



export default App;
