import React from "react";
import { View } from "react-native-web";
import { ListItem, Icon, Button } from "@rneui/themed";
import { Text } from "react-native";
import { RightOutlined } from "@ant-design/icons";

const Tarea = ({ tarea, tareas, setTareas, posicion }) => {
  
  const eliminarTarea = () => {
    var lista1 = tareas.slice(0, posicion);
    console.log("Lista 1:" + lista1)
    var lista2 = tareas.slice(posicion + 1, tareas.length);
    console.log("Lista 2:" + lista2)

    setTareas(lista1.concat(lista2));
  };

  return (
    <View>
      <ListItem.Swipeable
      leftContent={() => (
        <>
        <Button
          title="Info"
          onPress={() => eliminarTarea()}
          icon={{ name: "info", color: "white" }}
          buttonStyle={{ minHeight: "100%", backgroundColor: "red"}}
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
    </View>
  );
};

export default Tarea;

/*
rightContent={(eliminarTarea) => (
          <>
          <Button
            title="Delete"
            onPress={() => eliminarTarea()}
            icon={{ name: "delete", color: "green" }}
            buttonStyle={{ minHeight: "100%", backgroundColor: "green" }}
            />
            </>
        )}
*/