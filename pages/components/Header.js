import React, { Component } from "react";
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    StatusBar
} from "react-native";
import TopBar from "./TopBar";
import { Navigation } from "react-native-navigation";
import Profile from "./Profile";

export default class Header extends Component {
    gotoScreen = screenName => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        });
    };
    render() {
        return (
            <View style={styles.headerContainer}>
                <StatusBar backgroundColor="#30477C" barStyle="light-content" />
                <TopBar />
                <View style={styles.tabContainer}>
                    <View style={styles.tabIconContainer}>
                        <TouchableOpacity
                            onPress={() => this.gotoScreen("Home")}>
                            <Image
                                style={styles.tabIconImg}
                                source={require("../../src/img/homeActive.png")}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabIconContainer}>
                        <TouchableOpacity
                            onPress={() => this.gotoScreen("AddFriend")}>
                            <Image
                                style={styles.tabIconImg}
                                source={require("../../src/img/group.png")}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabIconContainer}>
                        <TouchableOpacity
                            onPress={() => this.gotoScreen("MarketPlace")}>
                            <Image
                                style={styles.tabIconImg}
                                source={require("../../src/img/watch.png")}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabIconContainer}>
                        <TouchableOpacity
                            onPress={() => this.gotoScreen("Notfound")}>
                            <Image
                                style={styles.tabIconImg}
                                source={require("../../src/img/profile.png")}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabIconContainer}>
                        <TouchableOpacity
                            onPress={() => this.gotoScreen("Notification")}>
                            <Image
                                style={styles.tabIconImg}
                                source={require("../../src/img/notification.png")}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabIconContainer}>
                        <TouchableOpacity
                            onPress={() => this.gotoScreen("NavigationMenu")}>
                            <Image
                                style={styles.tabIconImg}
                                source={require("../../src/img/more.png")}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 90,
        borderBottomWidth: 1,
        marginTop: 25,
        borderBottomColor: "#c1c4c9",
        paddingBottom: 3
    },
    tabContainer: {
        height: 60,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 18,
        paddingTop: 5
    },
    tabIconContainer: {
        flex: 1,
        marginTop: 20
    },
    tabIconImg: {
        height: 24,
        width: 24
    }
});
