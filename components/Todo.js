import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export const Todo = (props) => {
  const { todos, onClickComplete, onClickDeleteIncompleted } = props
  return (
    <>
      {todos.map((todo, index) => {
        return (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{todo}</Text>
            <View style={styles.itemRight}>
              <TouchableOpacity onPress={() => onClickComplete(index)}>
                <Text>✅</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onClickDeleteIncompleted(index)}>
                <Text>🆑</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      })}
    </>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemRight: {
    flexDirection: "row",
  },
  itemText: {
    maxWidth: "80%",
  },
})
