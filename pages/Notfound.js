import React, { Component } from "react";
import Header from "./components/Header";

import { View, Text } from "react-native";

class Notfound extends Component {
    render() {
        return (
            <View>
                <Header componentId={this.props.componentId} />
                <View style={{ marginTop: 180 }}>
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: "bold",
                            textAlign: "center"
                        }}>
                        Halaman Belom jadi
                    </Text>
                </View>
            </View>
        );
    }
}

export default Notfound;
