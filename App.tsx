import React, {useState} from 'react';
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




const Drawer = createDrawerNavigator();

function App(){

const [arrayOfGoals, setArrayOfGoals] = useState([] as Types.Goal[])
const [goalId, setGoalId] = useState(1)

const handleDeleteGoal = (id: number) => {
  // Handle delete logic
  const newArrayOfGoals = arrayOfGoals.filter(goal => goal.id !== id);
  setArrayOfGoals(newArrayOfGoals);
};

const handleCreateGoal = (name: string) => {
  // Handle create logic
  if(name.length > 0){
    const newGoal: Types.Goal = {
      goalitems: [] as Types.Habit[],
      habits: [] as Types.Habit[],
      tasks: [] as Types.Task[],
      characters: [] as Types.Character[],
      generics: [] as Types.Generic[],
      id: goalId,
      is_deleted: false,
      is_active: true,
      lobby_personal: false,
      lobby_values: true,
      itemorder: null,
      name: name,
      sheets: [] as Types.Sheet[]
    };
    const newArrayOfGoals = [...arrayOfGoals, newGoal];
    setArrayOfGoals(newArrayOfGoals);
    setGoalId(goalId + 1);
  };
};

const handleCreateGeneric = (generic:Types.Character, goalId:Number, type:string) => {
  const types = type+'s';
  const newArrayOfGoals = arrayOfGoals.map(goal => {
    if(goal.id === goalId){
      goal[types].push(generic)
    }
    return goal
  });
  setArrayOfGoals(newArrayOfGoals);
};

const handleDeleteGeneric = (genericId: string, goalId: number, type:String) => {
  const types = type+'s';
  const newArrayOfGoals = arrayOfGoals.map(goal => {
    if(goal.id === goalId){
      goal[types] = goal[types].filter(generic => generic.id !== genericId)
    }
    return goal
  });
  setArrayOfGoals(newArrayOfGoals);
};



  return (
    <NavigationContainer>
      <Drawer.Navigator>

        <Drawer.Screen name="Home">
          {() => <HomeScreen data = {arrayOfGoals}
           handleCreateGeneric={handleCreateGeneric} handleDeleteGeneric={handleDeleteGeneric} />}
        </Drawer.Screen>
        <Drawer.Screen name="Goals" >
          {() => <GoalList data = {arrayOfGoals} 
          handleDelete={handleDeleteGoal} handleCreate={handleCreateGoal} />}
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
