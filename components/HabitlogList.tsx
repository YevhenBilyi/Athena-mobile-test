import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';



const HabitLog =({date}:{date:string})=>{
  return(
    <View
    style={{flex:1, flexDirection:'row', justifyContent:'space-evenly'}}>
      <Text style={{fontFamily:'JosefinSans-Regular', fontSize:20, marginTop:10}}
      >{date}</Text>
      <BouncyCheckbox
        size={25}
        fillColor="green"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "green" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        style={{ marginTop: 10 }}
      />
    </View>
  )
}
const HabitlogList = ({route, navigation}:{route:any, navigation:any}) => {
  const {habitId, habitName} = route.params;
  useEffect(() => {
    if(habitName != "None"){
      navigation.setOptions({ title: habitName });
    }
  }
  , [habitName]);
 
  const currentYear = new Date().getFullYear();

  const dates = [];
   for (let i = 1; i <= 365; i++) {
    const currentDate = new Date(currentYear, 0, i);
    dates.push(currentDate);
  };

  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var todayIndex = Math.floor(diff / oneDay);
  const [targetDay, setTargetDay] = React.useState(todayIndex);

  const orderedDates = [
    ...dates.slice(targetDay-6, targetDay+1),
  ];
  const handlePressBack=()=>{
    if(targetDay>6){
      setTargetDay(targetDay-7);
    }
  }
  const handlePressForward=()=>{
    if(targetDay<dates.length-7){
      setTargetDay(targetDay+7);
    }
  }



  return (
    <View>
      
      <TouchableOpacity onPress={handlePressBack}>
        <Text style={{fontFamily:'JosefinSans-Regular', fontSize:20, marginTop:10, marginLeft:10}}
        >{"<"}</Text>
      </TouchableOpacity>
      <FlatList
        data={orderedDates}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <HabitLog date={item.toDateString()} />
      )}
      />
      <TouchableOpacity onPress={handlePressForward}>
        <Text style={{fontFamily:'JosefinSans-Regular', fontSize:20, marginTop:10, marginLeft:10}}
        >{">"}</Text>
      </TouchableOpacity>
    </View>

  );
};

export default HabitlogList;