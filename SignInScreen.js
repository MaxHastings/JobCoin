import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  TextInput,
} from "react-native";
import { AddressContext } from "./AddressContext";

export default class SignInScreen extends Component {
  address = "";

  constructor(props) {
    super(props);
  }

  updateAddress(text) {
    this.address = text;
  }

  render() {
    return (
      <AddressContext.Consumer>
        {({ address, setAddress }) => (
          <SafeAreaView style={styles.container}>
            <Text>Sign In</Text>
            <Text>Address</Text>
            <TextInput
              style={{ height: 40 }}
              placeholder="Bob"
              onChangeText={(text) => this.updateAddress(text)}
            />
            <Button
              title="Sign In"
              onPress={() => {
                setAddress(this.address);
                this.props.navigation.navigate("BalanceScreen", {
                  address: this.address,
                });
              }}
            />
          </SafeAreaView>
        )}
      </AddressContext.Consumer>
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
