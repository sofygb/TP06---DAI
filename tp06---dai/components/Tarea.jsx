import React from "react";
import { View } from "react-native-web";

const Tarea = ({tarea,descripcion,tareas,setTareas}) => {
    return(
        <View>
            <Text>Tarea: {tarea}</Text>
            <Text>Descripción: {descripcion}</Text>
        </View>
    )
}

export default Tarea;