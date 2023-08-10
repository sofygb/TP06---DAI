import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Formulario from "./components/Formulario";
import ListadoTareas from "./components/ListadoTareas";
import { ListItem, Icon, Button } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RightOutlined } from "@ant-design/icons";

export default function App() {
  const [tareas, setTareas] = React.useState([]);

  function updateTask(p) {
    setTareas(p);
    console.log(p);
  }

  const eliminarTarea = (tarea) => {
    //const nuevasTareas = tareas.filter((tareas) => tareas.tarea == tarea);
    const posicion = tareas.indexOf({Tarea: tarea});

    const lista1 = tareas.slice(0, posicion);
    const lista2 = tareas.slice(posicion + 1, tareas.length);

    const listaFinal = lista1.concat(lista2)

    setTareas(listaFinal);

    console.log(listaFinal);
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <h1>Listado de Tareas</h1>

        <Formulario setTareas={updateTask} tareas={tareas} />
        {tareas.map((tarea) => (
          <>
            <ListItem.Swipeable
              leftContent={() => (
                <>
                <Button
                  title="Info"
                  onPress={() => eliminarTarea(tarea.Tarea)}
                  icon={{ name: "info", color: "green" }}
                  buttonStyle={{ minHeight: "100%", backgroundColor: "red"  }}
                  />
                <RightOutlined />
                  </>
              )}
              rightContent={() => (
                <Button
                  title="Delete"
                  onPress={() => eliminarTarea(tarea.Tarea)}
                  icon={{ name: "delete", color: "white" }}
                  buttonStyle={{ minHeight: "100%", backgroundColor: "blue" }}
                />
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
