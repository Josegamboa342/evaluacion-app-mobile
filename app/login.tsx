import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

const CLAVE_CORRECTA: string = "del1al9";

const LoginScreen = () => {

  const [clave, setClave] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const router = useRouter();

  const validarClave = (): void => {
    if (clave === CLAVE_CORRECTA) {
      router.push("/notas");
    } else {
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ingrese la clave</Text>

      <TextInput
        style={styles.input}
        secureTextEntry
        value={clave}
        onChangeText={(value: string) => setClave(value)}
        placeholder="Digite la clave"
      />

      <Button title="Validar" onPress={validarClave} />


      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.error}>Clave inválida</Text>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  titulo: {
    fontSize: 20,
    marginBottom: 10
  },
  input: {
    width: "100%",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalBox: {
    width: 250,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center"
  },
  error: {
    color: "red",
    marginBottom: 10,
    fontSize: 16
  }
});