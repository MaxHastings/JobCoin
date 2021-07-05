import "react-native-gesture-handler";
import React, { Component } from "react";
import { AddressContext } from "./AddressContext";
import SendScreen from "./SendScreen";

export default class SendConsumer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AddressContext.Consumer>
        {({ address }) => (
          <SendScreen navigation={this.props.navigation} address={address} />
        )}
      </AddressContext.Consumer>
    );
  }
}
