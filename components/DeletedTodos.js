import React from "react"
import { View, Text, StyleSheet } from "react-native"

export const DeletedTodos = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}></Text>

      <View style={styles.itemRight}>
        <Text >↩️</Text>
        
      </View>
    </View>
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

export default DeletedTodos
