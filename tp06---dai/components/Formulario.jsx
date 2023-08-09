import * as React from "react";
import { Modal, Portal, Button, PaperProvider } from "react-native-paper";
import { StyleSheet, View, Pressable, Text } from "react-native";

const Formulario = (props) => {
  //State del modal
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  const updateTarea = () => {
    const nuevaTarea = {
      Tarea: document.getElementById("tarea").value,
      Descripcion: document.getElementById("descripcion").value,
    };
    console.log(nuevaTarea)

    props.setTareas([...props.tareas, nuevaTarea]);

    console.log(props.tareas)
  };

  return (
    <View>
      <PaperProvider >
        <Portal style={{width:'100%'}}>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
            style={styles.view}
          >
            <Button title="x" onPress={hideModal} style={styles.x}>
                x</Button>
            <View className="one-half column">
        <h2 style={{marginTop:0}}>Nueva Tarea</h2>
        <label style={styles.label}>Tarea</label>
        <input
          type="text"
          name="tarea"
          className="u-full-width"
          placeholder="Nueva Tarea"
          id="tarea"
          style={styles.input}
        />

        <label style={styles.label}>Descripción</label>
        <input
          type="text"
          name="descripcion"
          className="u-full-width"
          placeholder="Detalles"
          id="descripcion"
          style={styles.input}
        />

        <View style={styles.row}>
          <Pressable style={styles.pressable} onPress={updateTarea}>
            <Text>Aceptar</Text>
          </Pressable>
        </View>
      </View>
          </Modal>
        </Portal>
        <Pressable style={styles.pressable} onPress={showModal}>
          <Text>Add Task +</Text>
        </Pressable>
      </PaperProvider>
      
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    color:"white"
  },
  pressable: {
    backgroundColor: "green",
    justifyContent: "center",
    borderRadius: 8,
    padding: 6,
    color: "white",
  },
  view: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: '0px solid black',
    box: 'border-box',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    minHeight: '30%',
    padding: '0px',
    zIndex: 0
},
x: {
    alignItems: 'flex-end'
},
input: {
    marginBottom: '5%'
},
label: {
    marginBottom: '2%'
}
});

export default Formulario;
