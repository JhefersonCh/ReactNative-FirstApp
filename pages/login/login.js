import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import ButtonGradient from "../components/buttonGradient";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>Hello</Text>
    <Text style={styles.subtitle}>Sign in to your account</Text>
  </View>
);

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Header />
      <TextInput style={styles.input} placeholder="Ej: example@example.com" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <View style={styles.forgot}>
        <Text style={styles.forgotText}>Forgot your password?</Text>
      </View>
      <ButtonGradient navigation={navigation} />
      <Text style={styles.text}>Don't have an account?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#34434D",
    fontSize: 80,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
  },
  input: {
    height: 50,
    width: 300,
    borderRadius: 25,
    marginTop: 20,
    paddingStart: 20,
    backgroundColor: "#fff",
  },
  header: {
    width: "70%",
    marginBottom: 20,
  },
  forgot: {
    marginTop: 20,
    width: "70%",
    alignSelf: "center", // Cambiado a 'center' para alineación vertical
    justifyContent: "flex-end", // Alineación del texto a la derecha
  },
  forgotText: {
    textAlign: "right",
    color: "gray",
  },
  text: {
    marginTop: 20,
    color: "gray",
  },
});