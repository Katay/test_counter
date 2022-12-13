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

import Button from "./components/Button";
import { decrement, increment } from "./store/reducers";
import { Styles, Colors } from "./styles/index";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <View style={Styles.Main.Background}>
      <SafeAreaView>
        <Button
          text={-1}
          onPress={() => {
            dispatch(decrement())
          }}
        />
        <View
          style={styles.result}
        >
          <Text style={styles.resultText}>{count}</Text>
        </View>
        <Button
          text={+1}
          onPress={() => {
            dispatch(increment())
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  result: {
    height: Dimensions.get('window').height / 3,
    justifyContent: "center",
    alignItems: "center",
  },
  resultText: {
    color: Colors.lightGreen,
    fontSize: 64,
    fontWeight: "700",
  },
});

export default Counter;
