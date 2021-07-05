import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import BalanceConsumer from "./BalanceConsumer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./SignInScreen";
import ProfileScreen from "./ProfileScreen";
import { AddressContext } from "./AddressContext";
import SendConsumer from "./SendConsumer";
const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "Bob",
    };

    this.setAddress = (address) => {
      this.setState({
        address: address,
      });
    };
  }

  render() {
    return (
      <AddressContext.Provider
        value={{ address: this.state.address, setAddress: this.setAddress }}
      >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="SignInScreen"
              options={{ setAddress: this.setAddress }}
              component={SignInScreen}
            />
            <Stack.Screen name="BalanceScreen" component={BalanceConsumer} />
            <Stack.Screen name="SendScreen" component={SendConsumer} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AddressContext.Provider>
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
