import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from "react-native";
import GoalInput from "./src/Components/Goals/GoalInput";
import GoalItem from "./src/Components/Goals/GoalItem";
import { IGoal } from "./src/Interface/GoalInterface";

export default function App(){

  const [ enteredGoalText, setEnteredGoal ] = useState<string>("");
  const [ courseGoals, setCourseGoals ] = useState<IGoal[]>([]);


  const goalInputHandler = ( enteredText: string ) => {
    setEnteredGoal(enteredText)
  }
  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
  }

  return(
    <View style = { styles.appContainer }>
      <GoalInput addGoalHandler = { addGoalHandler } goalInputHandler = { goalInputHandler } />
      <View style = { styles.goalsContainer }>
        <FlatList 
          data={ courseGoals } 
          renderItem = {(itemData) => {
            return (
              <GoalItem text  = { itemData.item.text } />
            )
          }} 
          keyExtractor = {(item, index) => {
            return item.id
          }}
          alwaysBounceVertical = {false}>
        </FlatList>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 8
  },
});