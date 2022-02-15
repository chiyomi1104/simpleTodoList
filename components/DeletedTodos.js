import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export const DeletedTodos = (props) => {
  const { todos, onClickBack } = props
  return (
    <>
      {todos.map((todo, index) => {
        return (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{todo}</Text>
            <View style={styles.itemRight}>
              <TouchableOpacity onPress={() => onClickBack(index)}>
                <Text>↩️</Text>
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
    alignItems: "center",
    flexWrap: "wrap",
  },
  // square: {
  //   width: 24,
  //   height: 24,
  //   backgroundColor: "#55BCF6",
  //   opacity: 0.4,
  //   borderRadius: 5,
  //   marginRight: 15,
  // },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    backgroundColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
})
