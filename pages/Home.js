import React, { Component } from "react";
import {AsyncStorage, View, ScrollView, StyleSheet, StatusBar } from "react-native";
import Header from "../pages/components/Header";
import AddStatus from "../pages/components/AddStatus";
import Status from "../pages/components/Status";
import Story from "../pages/components/Story";

class Home extends Component {

    async componentDidMount() {
        const token = await AsyncStorage.getItem('token');
        if (token === null) {
                Navigation.push(this.props.componentId, {
                    component: {
                        name: "Login"
                    }
                });
            }
        }

    render() {
        const photo = require("../src/img/photo.jpeg");
        return (
            <View style={styles.container}>
                <Header componentId={this.props.componentId} />
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#30477C"
                    translucent={true}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <AddStatus photo={photo} />
                    <Story />
                    <View style={styles.lineBorder} />
                    <Status />
                </ScrollView>
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    lineBorder: {
        borderColor: "#DDDDE4",
        borderWidth: 2
    }
});
