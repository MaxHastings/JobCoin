import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { SafeAreaView, Text, View, Button } from "react-native";
import BalanceGraph from "./BalanceGraph";
import GetBalanceHistory from "./BalanceHistory";
import styles from "./Styles";

export default class BalanceScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0,
      isLoading: true,
      transactions: [],
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", (e) => {
      this.setState({ isLoading: true });
      this.fetchBalance();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  fetchBalance() {
    fetch(
      "http://jobcoin.gemini.com/pedigree-antiquely/api/addresses/" +
        this.props.address
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          balance: json.balance,
          transactions: json.transactions,
        });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{this.props.address}</Text>
        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate("ProfileScreen")}
        />
        <View style={styles.container}>
          <Text>Balance History</Text>
          {!this.state.isLoading && (
            <BalanceGraph
              balanceHistory={GetBalanceHistory(
                this.props.address,
                parseFloat(this.state.balance),
                this.state.transactions
              )}
            />
          )}
          <Text>Current Balance {this.state.balance}</Text>
          <StatusBar style="auto" />
          <View style={[{ alignSelf: "stretch", padding: 16 }]}>
            <Button
              title="Send JobCoin"
              onPress={() => this.props.navigation.navigate("SendScreen")}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
