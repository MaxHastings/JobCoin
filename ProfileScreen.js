import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button
          title="Sign Out"
          onPress={() => this.props.navigation.navigate("SignInScreen")}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
