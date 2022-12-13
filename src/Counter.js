import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { decrement, increment } from "./store/reducers";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(decrement())
          }}
        >
          <Text style={styles.textButton}>-1</Text>
        </TouchableOpacity>
        <View
          style={styles.result}
        >
          <Text style={styles.resultText}>{count}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(increment())
          }}
        >
          <Text style={styles.textButton}>+1</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#004761",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
  result: {
    height: Dimensions.get('window').height / 3,
    justifyContent: "center",
    alignItems: "center",
  },
  resultText: {
    color: "#8cd6bd",
    fontSize: 64,
    fontWeight: "700",
  },
});

export default Counter;
