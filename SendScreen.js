import React, { Component } from "react";
import { Text, TextInput, View, Button, Alert } from "react-native";

export default class SendScreen extends Component {
  address = "";
  amount = 0;

  constructor(props) {
    super(props);
  }

  sendCoins() {
    fetch("http://jobcoin.gemini.com/pedigree-antiquely/api/transactions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fromAddress: this.props.address,
        toAddress: this.address,
        amount: this.amount,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          Alert.alert("Sent");
        } else if (response.status === 422) {
          Alert.alert("Insufficient Funds");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  setAddress(address) {
    this.address = address;
  }

  setAmount(amount) {
    this.amount = amount;
  }

  render() {
    return (
      <View>
        <Text>Address</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Bob"
          onChangeText={(text) => this.setAddress(text)}
        />
        <Text>Amount</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="100"
          onChangeText={(text) => this.setAmount(text)}
        />
        <Button title="Send JobCoin" onPress={() => this.sendCoins()} />
      </View>
    );
  }
}
