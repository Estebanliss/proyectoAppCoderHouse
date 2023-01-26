import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Pressable, Alert } from 'react-native';
import { COLORS } from "./src/constants/Color";


export default function App() {

  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);

  const onItem = (event) => {
    setTextItem(event)
  }

  const addItem = () => {
    setList(prevState => [...prevState, textItem])
    setTextItem("")
  }

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.titleApp1}>
        <Text style={styles.titleApp}>WORK-IT</Text>
      </View>
      <View style={styles.titleApp2}>
        <TextInput
          placeholder='Escribe una tarea'
          style={styles.input}
          onChangeText={onItem}
          value={textItem}
        />
        <Button title="Guardar" onPress={addItem} />
      </View>
      <View style={styles.titleApp3}>
        <View style={styles.containerFlatList}>
          <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.index}
          />
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
  },

  //TITULO
  titleApp1: {
    flex: 1,
    width: "100%",
  },

  titleApp: {
    textAlign: 'center',
    marginTop: 70,
    fontSize: 30,
    fontWeight: "800",
    color: "#49AAF3",
  },

  //INPUT
  titleApp2: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    marginBottom: 10,
  },

  input: {
    borderRadius: 10,
    width: "90%",
    height: 70,
    backgroundColor: "white",
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginBottom: 30,

  },

  //LISTA
  titleApp3: {
    flex: 4,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    margin: "auto",
  },

  containerFlatList: {
    flex: 1,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },

  renderItemStyle: {
    paddingVertical: 15,
    paddingLeft: 25,
    marginTop: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    
  },


  itemText: {
    fontWeight: "600",
    fontSize: 16,
  },

});
