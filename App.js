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
} from "react-native"
import { CompletedTodos } from "./components/CompletedTodos"
import DeletedTodos from './components/DeletedTodos'
import Todo from "./components/Todo"

export default function App() {
  const [task, setTask] = useState()
  const [incompeleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])

  const onClickAdd = () => {
    Keyboard.dismiss()
    setIncompleteTodos([...incompeleteTodos, task])
    setTask(null)
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompeleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompeleteTodos]
    newIncompleteTodos.splice(index, 1)
    const newCompleteTodos = [...completeTodos, incompeleteTodos]
    setCompleteTodos(newCompleteTodos)
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index, 1)
    const newIncompleteTodos = [...incompeleteTodos, completeTodos[index]]
    setCompleteTodos(newCompleteTodos)
    setIncompleteTodos(newIncompleteTodos)
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Today's Todos</Text>
          {/* Imcompleted todos */}
          {incompeleteTodos.length === 0 && <Text>All todos are cleared!</Text>}
          <View style={styles.items}>
            {incompeleteTodos.map((item, index) => {
              return (
                <>
                  <TouchableOpacity
                    key={index}
                    onPress={() => onClickComplete(index)}
                  >
                    <Todo text={item} />
                  </TouchableOpacity>
                </>
              )
            })}
          </View>
          {/* Completed todos */}
          <Text style={styles.sectionTitle}>Completed Todos</Text>
          <CompletedTodos
            todos={completeTodos}
            
            onClickBack={onClickBack}
          />
          {/* Deleted todos */}
          <Text style={styles.sectionTitle}>Deleted Todos</Text>
          <DeletedTodos text={setIncompleteTodos} onClickBack={onClickBack} />
        </View>

        {/* Input todos */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"write a task"}
            value={task}
            onChangeText={(text) => setTask(text)}
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
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop:10
  },
  items: {
    marginTop: 10,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
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
