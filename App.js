import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Pressable, Alert, Modal } from 'react-native';
import { COLORS } from "./src/constants/Color";
import { faCircleCheck, faPenToSquare } from '@fortawesome/free-regular-svg-icons';


export default function App() {
  const [textItem, setTextItem] = useState("")
  const [list, setList] = useState([
    {
      tarea: "Llenar la pileta",
      valor: 4,
      id: 1
    },
    {
      tarea: "Levantarse a las 6:30",
      valor: 3,
      id: 2
    },
    {
      tarea: "Limpiar Casa",
      valor: 6,
      id: 3
    },
    {
      tarea: "Bañarse y alistarse, porque sinó mañana vamos a tener un día terrible",
      valor: 1,
      id: 4
    },
    {
      tarea: "Llenar la pileta",
      valor: 4,
      id: 5
    },
    {
      tarea: "Levantarse a las 6:30",
      valor: 3,
      id: 6
    },
    {
      tarea: "Limpiar Casa",
      valor: 6,
      id: 7
    },
    {
      tarea: "Bañarse y alistarse",
      valor: 1,
      id: 8
    },
  ])
  const [itemSelected, setItemSelected] = useState("")
  const [modalVisible, setModalVisible] = useState(false)


  const onItem = (event) => {
    setTextItem(event)
  }

  const addItem = () => {
    setList(prevState => [...prevState, textItem])
    setTextItem("")
  }

  const handleModal = ({ item, tarea }) => {
    setItemSelected(tarea)
    setModalVisible(true)
  }

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text style={styles.itemText}>{item.tarea}</Text>
      <View style={styles.itemIcon}>
        <Pressable style={styles.icon} onPress={() => handleModal(item)}>
          <FontAwesomeIcon size={25} color={"gray"} icon={faPenToSquare} />
        </Pressable>
        <Pressable style={styles.icon} onPress={() => console.log(handleModal(item))}>
          <FontAwesomeIcon size={25} color={"gray"} icon={faCircleCheck} />
        </Pressable>
      </View>
    </View>
  )

  const handleDelete = (item) => {
    setList(prevState => prevState.filter(element => element !== item));
    setModalVisible(!modalVisible)
  }

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
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        itemSelected={itemSelected}
      >
        <View style={styles.containerModal}>
          <View style={styles.modalStyles}>
            <Text>Estás por eliminar la siguiente tarea</Text>
            <Text style={styles.textTareaModal}>{itemSelected}</Text>
            <View style={styles.buttonsModal}>
              <Pressable onPress={() => handleDelete(item)}>
                <Text style={[styles.buttons, styles.buttonNegative]} >Eliminar</Text>
              </Pressable>
              <Pressable onPress={() => setModalVisible(false)} >
                <Text style={[styles.buttons, styles.buttonPositive]}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: "#E6E6E6",

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

  },

  containerFlatList: {
    flex: 1,
    width: "100%",
    marginBottom: 25,
  },

  renderItemStyle: {
    flexDirection: "row",
    width: "90%",
    paddingHorizontal: 15,
    marginLeft: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginBottom: 25,

  },

  itemText: {
    fontWeight: "600",
    width: "80%",
    fontSize: 16,
    paddingRight: 15,
    paddingVertical: 15,
    color: "gray",
  },

  itemIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "20%",
  },

  //MODAL
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },

  modalStyles: {
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 30,
    width: "90%",
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  buttonsModal: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
  },

  buttons: {
    width: 130,
    height: 50,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    paddingHorizontal: 10,
    borderRadius: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 3,
  },

  buttonPositive: {
    backgroundColor: "#49AAF3",
  },

  buttonNegative: {
    backgroundColor: "#FDBF50",
  },

  textTareaModal: {
    fontSize: 20,
    fontWeight: "800",
    paddingTop: 15,
    paddingBottom: 35,
  }



});
