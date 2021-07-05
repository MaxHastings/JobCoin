import "react-native-gesture-handler";
import React, { Component } from "react";
import { AddressContext } from "./AddressContext";
import BalanceScreen from "./BalanceScreen";

export default class BalanceConsumer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AddressContext.Consumer>
        {({ address }) => (
          <BalanceScreen navigation={this.props.navigation} address={address} />
        )}
      </AddressContext.Consumer>
    );
  }
}
