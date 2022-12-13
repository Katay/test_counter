import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const Button = ({ text, onPress }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
  >
    <Text style={styles.textButton}>{text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    height: 60,
    backgroundColor: "white",
    padding: 16,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  textButton: {
    fontSize: 24,
    fontWeight: "700",
  },
});

export default Button;
