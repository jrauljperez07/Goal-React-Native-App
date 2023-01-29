import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { IGoal } from '../../Interface/GoalInterface'

const GoalItem: React.FC <{ text: string }> = (props) => {
    const { text } = props;
    
    return (
        <View>
            <Text style = { styles.goalItem }>{text}</Text>
        </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        borderColor: "#5e0acc",
        borderWidth: 2,
        padding: 10,
        borderRadius: 6,
        marginVertical: 8,
    }
})