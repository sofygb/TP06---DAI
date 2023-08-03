import React from "react";
import { StyleSheet, View, Pressable } from "react-native";

const Formulario = (props) => {
    const updateTarea = () => {
        const nuevaTarea = {
            Tarea: document.getElementById("tarea").value,
            Descripcion: document.getElementById("descripcion").value,
        }

        props.setTareas([...props.tareas, nuevaTarea])
    }
    
    return (
        <View className="one-half column">
                <label>Tarea</label>
                <input type="text" name="tarea" className="u-full-width" placeholder="Nueva Tarea" id="tarea" />
                
                <label>Descripción</label>
                <input type="text" name="descripcion" className="u-full-width" placeholder="Detalles" id="descripcion" />
                
                <View style={styles.row}>
                    <Pressable style={styles.pressable} onPress={updateTarea}>Add Task +</Pressable>          
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
      pressable: {
        backgroundColor: 'green',
                justifyContent: 'center',
                borderRadius: 8,
                padding: 6,
                color: 'white'
      },
})

export default Formulario;