import { useRouter } from "expo-router";
import React, { useState } from "react";
import { SectionList } from "react-native";
import { Button, Modal, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const NotasScreen = () => {

  const [nota, setNota] = useState<string>("");
  const [notas, setNotas] = useState<number[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const router = useRouter();

  const agregarNota = (): void => {

    const valor: number = parseFloat(nota);

    if (
      !isNaN(valor) &&
      valor >= 0 &&
      valor <= 5 &&
      /^\d+(\.\d{1,2})?$/.test(nota)
    ) {
      setNotas((prev: number[]) => [...prev, valor]);
      setNota("");
    } else {
      setModalVisible(true);
    }
  };

  const calcularPromedio = (): string => {
    if (notas.length === 0) return "0.00";
    const suma: number = notas.reduce((acc: number, n: number) => acc + n, 0);
    return (suma / notas.length).toFixed(2);
  };

  const borrarNotas = (): void => {
    setNotas([]);
  };

  const salir = (): void => {
    router.replace("/login");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>Ingrese una nota</Text>

      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        value={nota}
        onChangeText={(value: string) => setNota(value)}
        placeholder="Ej: 3.50"
      />

      <Button title="Agregar" onPress={agregarNota} />

      <Text style={styles.promedio}>
        Promedio: {calcularPromedio()}
      </Text>

      <SectionList
  sections={[
    {
      title: "Notas ingresadas",
      data: notas
    }
  ]}
  keyExtractor={(item: number, index: number) => index.toString()}
  renderItem={({ item, index }) => (
    <Text>
      Nota {index + 1}: {item.toFixed(2)}
    </Text>
  )}
  renderSectionHeader={({ section }) => (
    <Text style={{ fontWeight: "bold", fontSize: 16, marginVertical: 10 }}>
      {section.title}
    </Text>
  )}
/>

      <Button title="Borrar todas las notas" onPress={borrarNotas} />
      <Button title="Salir" onPress={salir} />

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.error}>
              Nota inválida (0 a 5 con máximo 2 decimales)
            </Text>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

    </ScrollView>
  );
};

export default NotasScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  promedio: {
    marginVertical: 15,
    fontSize: 18,
    fontWeight: "bold"
  },
  tabla: {
    marginBottom: 20
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalBox: {
    width: 280,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center"
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center"
  }
});