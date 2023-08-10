import React from "react";
import { View } from "react-native-web";
import { ListItem, Icon, Button } from "@rneui/themed";

const Tarea = ({ tarea, descripcion, tareas, setTareas }) => {
  return (
    <View>
      <ListItem.Swipeable
          leftContent={(reset) => (
            <Button
              title="Info"
              onPress={() => reset()}
              icon={{ name: "info", color: "white" }}
              buttonStyle={{ minHeight: "100%" }}
            />
          )}
          rightContent={(reset) => (
            <Button
              title="Delete"
              onPress={() => reset()}
              icon={{ name: "delete", color: "white" }}
              buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
            />
          )}
        >
          <Icon name="My Icon" />
          <ListItem.Content>
            <ListItem.Title>Hello Swiper</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem.Swipeable>
      <Text>Tarea: {tarea}</Text>
      <Text>Descripción: {descripcion}</Text>
      
    </View>
  );
};

export default Tarea;
