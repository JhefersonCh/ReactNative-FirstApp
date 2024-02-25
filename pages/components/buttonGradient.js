import react from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <LinearGradient
        colors={['#C7D0FF', '#808CC8']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25
  },
  text: {
    color: "white",
    fontWeight: "500",
    fontSize: 20
  }
});
