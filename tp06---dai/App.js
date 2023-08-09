import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import Formulario from './components/Formulario';
import ListadoTareas from './components/ListadoTareas';

export default function App() {
  const [tareas, setTareas] = React.useState([])

  function updateTask(p){
    setTareas(p)
    console.log(p)
  }


  return (
    <View style={styles.container}>
      <h1>Listado de Tareas</h1>

      <Formulario setTareas={updateTask} tareas={tareas}/>
    {tareas.map((tarea)=>
      (<>
          <Text>{tarea.Tarea}</Text>
          <Text>{tarea.Descripcion}</Text>
      </>)
      )   
    }
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '3%',
    fontFamily: 'calibri'
  },
  container2: {
      flex: 1,
      justifyContent: 'center',
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
      borderColor: '#f0f0f0',
      backgroundColor: '#f9f9f9',
    },
  });
