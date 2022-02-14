import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native"

const Todo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{props.text}</Text>
      <View style={styles.itemRight}>
        <Button onPress={() => onClickComplete(index)} title="✅">
          ✅
        </Button>
        <Button onPress={() => onClickDelete(index)} title="🆑">
          🆑
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: "3% 0%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemRight: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    maxWidth: "80%",
  },
})

export default Todo
