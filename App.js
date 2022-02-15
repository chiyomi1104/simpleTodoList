// @ts-nocheck
import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  ScrollView,
} from "react-native"
import { CompletedTodos } from "./components/CompletedTodos"
import { DeletedTodos } from "./components/DeletedTodos"
import { Todo } from "./components/Todo"

export default function App() {
  const [todo, setTodo] = useState("")
  const [incompeleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])
  const [deleteTodos, setDeleteTodos] = useState([])

  const onClickAdd = () => {
    Keyboard.dismiss()
    if (todo === "") return
    const newTodos = [...incompeleteTodos, todo]
    setIncompleteTodos(newTodos)
    setTodo("")
  }

  const onClickDeleteCompleted = (index) => {
    const newCompletedTodos = [...completeTodos]
    newCompletedTodos.splice(index, 1)
    const newDeletedTodos = [...deleteTodos, completeTodos[index]]

    setCompleteTodos(newCompletedTodos)
    setDeleteTodos(newDeletedTodos)
  }

  const onClickDeleteIncompleted = (index) => {
    const newTodos = [...incompeleteTodos]
    newTodos.splice(index, 1)
    const newDeletedTodos = [...deleteTodos, incompeleteTodos[index]]

    setIncompleteTodos(newTodos)
    setDeleteTodos(newDeletedTodos)
  }

  const onClickClearAll = () => {
    setDeleteTodos([])
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompeleteTodos]
    newIncompleteTodos.splice(index, 1)
    const newCompleteTodos = [...completeTodos, incompeleteTodos[index]]

    setIncompleteTodos(newIncompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index, 1)

    const newIncompleteTodos = [...incompeleteTodos]
    newIncompleteTodos.push(completeTodos[index] || deleteTodos[index])

    const newDeletedTodos = [...deleteTodos]
    newDeletedTodos.splice(index, 1)

    setCompleteTodos(newCompleteTodos)
    setIncompleteTodos(newIncompleteTodos)
    setDeleteTodos(newDeletedTodos)
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.taskWrapper}>
          <ScrollView>
            {/* Today's Todos */}
            <Text style={styles.sectionTitle}>Today's Todos</Text>
            {incompeleteTodos.length === 0 && (
              <Text>All todos are cleared! Input new tod</Text>
            )}
            <Todo
              onClickComplete={onClickComplete}
              onClickDeleteIncompleted={onClickDeleteIncompleted}
              todos={incompeleteTodos}
            />

            {/* Completed todos */}
            {completeTodos.length > 0 && (
              <Text style={styles.sectionTitle}>Completed Todos</Text>
            )}
            <CompletedTodos
              todos={completeTodos}
              onClickBack={onClickBack}
              onClickDeleteCompleted={onClickDeleteCompleted}
            />

            {/* Deleted todos */}
            {deleteTodos.length > 0 && (
              <>
                <Text style={styles.sectionTitle}>Deleted Todos</Text>
                <Text onPress={() => onClickClearAll()}>Clear All</Text>
              </>
            )}
            <DeletedTodos todos={deleteTodos} onClickBack={onClickBack} />
          </ScrollView>
        </View>

        {/* Input todos */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"write a task"}
            value={todo}
            onChangeText={(todo) => setTodo(todo)}
          />
          <TouchableOpacity onPress={() => onClickAdd()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  items: {
    marginTop: 10,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
})
