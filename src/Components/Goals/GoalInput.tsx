import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput: React.FC <{ addGoalHandler: () => void, goalInputHandler: ( enteredText: string ) => void }> = (props) => {

  const { addGoalHandler, goalInputHandler } = props;

  return (
    <View style = { styles.inputContainer }>
      <TextInput style = { styles.textInput } placeholder="Your course goal" onChangeText={ goalInputHandler } />
      <Button title = "Add goal" onPress={ addGoalHandler } />
  </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
})