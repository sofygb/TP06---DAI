import * as React from "react";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Formulario from "./components/Formulario";
import ListadoTareas from "./components/ListadoTareas";
import { ListItem, Icon, Button } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RightOutlined } from "@ant-design/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeData } from "./asyncStorage";
import "./App.css";

export default function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    //Actualiza el asyncStorage solo cuando tarea cambia (Eliminar o crear tarea)
    storeData(tareas);
  }, [tareas]);

  useEffect(() => {
    const inicializarAsyncStorage = async () => {
      try {
        const storedData = await AsyncStorage.getItem("@tareas");
        if (storedData !== null) {
          setTareas(JSON.parse(storedData));
        }
      } catch (e) {
        console.error("Error al inicializar AsyncStorage: ", e);
      }
    };
    inicializarAsyncStorage();

    const listaGuardada = getData();
    if (listaGuardada != null) {
    }
  }, []);

  //Componente Tarea: para modularizar el codigo, hay que hacer un async-await en Tarea.jsx
  const Tarea = ({ tarea, tareas, setTareas, posicion }) => {
    const eliminarTarea = () => {
      console.log("Tareas: " + tareas);
      console.log("Tareas: " + tarea);
      var lista1 = tareas.slice(0, posicion);
      console.log("Lista 1:" + lista1);
      var lista2 = tareas.slice(posicion + 1, tareas.length);
      console.log("Lista 2:" + lista2);

      setTareas(lista1.concat(lista2));
    };
  };
  const guardarTarea = async (tarea) => {
    try {
      const newTareas = [...tarea];
      setTareas(newTareas);
      await AsyncStorage.setItem("@tareas", JSON.stringify(newTareas));
    } catch (e) {
      console.log(e);
      throw new Error("Error: Error en guardarTarea()");
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@tareas");
      if (value !== null) {
        // value previously stored
        console.log(value);
        return value;
      }
    } catch (e) {
      // error reading value
      return null;
    }
  };

  function updateTask(p) {
    setTareas(p);
    guardarTarea(p);
    console.log(p);
    getData();
  }

  const eliminarTarea = (tarea) => {
    //const nuevasTareas = tareas.filter((tareas) => tareas.tarea == tarea);
    console.log(tareas);
    const posicion = tareas.indexOf(tarea);

    const lista1 = tareas.slice(0, posicion);
    const lista2 = tareas.slice(posicion + 1, tareas.length);

    const listaFinal = lista1.concat(lista2);

    setTareas(listaFinal);

    console.log(listaFinal);
  };

  const tacharTexto = (tarea) => {
    console.log(tareas);
    const posicion = tareas.indexOf(tarea);
    if (tareas[posicion].Chequeado) {
      tareas[posicion].Chequeado = false
    }
    else{
      tareas[posicion].Chequeado = true
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <h1>Listado de Tareas</h1>

        <div style={{ display: "flex" }}>
          <Formulario setTareas={updateTask} tareas={tareas} /> <br></br>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "30%",
            }}
          >
            {tareas.map((tarea) => (
              <>
                <ListItem.Swipeable
                  leftContent={() => (
                    <>
                      <Button
                        title="Eliminar"
                        onPress={() => eliminarTarea(tarea)}
                        icon={{ name: "delete", color: "white" }}
                        buttonStyle={{
                          minHeight: "100%",
                          backgroundColor: "red",
                        }}
                      />
                      <RightOutlined />
                    </>
                  )}
                >
                  <input
                    type="checkbox"
                    id="checkbox"
                    onClick={tacharTexto(tarea)}
                  ></input>
                  {tarea.Chequeado == true && (
                    <>
                      <ListItem.Content>
                        <ListItem.Title
                          style={{ textDecoration: "line-through" }}
                        >
                          {tarea.Tarea}
                        </ListItem.Title>
                        <ListItem.Subtitle
                          style={{ textDecoration: "line-through" }}
                        >
                          {tarea.Descripcion}
                        </ListItem.Subtitle>
                      </ListItem.Content>
                      <ListItem.Chevron />
                    </>
                  )}
                  {tarea.Chequeado == false && (
                    <>
                      <ListItem.Content>
                        <ListItem.Title>{tarea.Tarea}</ListItem.Title>
                        <ListItem.Subtitle>
                          {tarea.Descripcion}
                        </ListItem.Subtitle>
                      </ListItem.Content>
                      <ListItem.Chevron />
                    </>
                  )}
                </ListItem.Swipeable>
              </>
            ))}
          </div>
        </div>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: "3%",
    fontFamily: "calibri",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    backgroundColor: "#f9f9f9",
  },
});
/*
{tareas.map((tarea) => (
  <>
  <ListItem.Swipeable
  leftContent={() => (
    <>
    <Button
    title="Info"
    onPress={() => eliminarTarea(tarea.Tarea)}
    icon={{ name: "delete", color: "green" }}
    buttonStyle={{ minHeight: "100%", backgroundColor: "blue"  }}
    />
    <RightOutlined />
    </>
       )}
       >
       <Icon name="My Icon" />
       <ListItem.Content>
       <ListItem.Title>{tarea.Tarea}</ListItem.Title>
       <ListItem.Subtitle>{tarea.Descripcion}</ListItem.Subtitle>
       </ListItem.Content>
       <ListItem.Chevron />
       </ListItem.Swipeable>
       </>
       ))} 
       */
