import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
    try {
      //AsyncStorage.removeItem elimina toda la lista de objetos. Eliminar y cargar con la lista cortada
      await AsyncStorage.setItem('my-key', JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

export const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('my-key');
      if (value !== null) {
        // value previously stored
        return value;
      }
    } catch (e) {
      // error reading value
      return null
    }
  };