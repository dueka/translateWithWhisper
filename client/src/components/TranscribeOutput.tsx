import React from "react";
import { Text, View, StyleSheet } from "react-native";
const TranscribedOutput = ({
  transcribedText,
  interimTranscribedText,
}: any) => {
  if (transcribedText.length === 0 && interimTranscribedText.length === 0) {
    return <Text>...</Text>;
  }

  return (
    <View style={styles.box}>
      <Text style={styles.text}>{transcribedText}</Text>
      <Text>{interimTranscribedText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 0,
  },
  text: {
    fontWeight: "400",
    fontSize: 30,
  },
});

export default TranscribedOutput;
