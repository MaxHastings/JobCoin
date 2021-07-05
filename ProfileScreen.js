import "react-native-gesture-handler";
import React, { Component } from "react";
import { SafeAreaView, Button } from "react-native";
import styles from "./Styles";

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
