import React, { Component } from "react";
import { View, Image, StyleSheet, TextInput } from "react-native";

export default class TopBar extends Component {
    render() {
        return (
            <View style={styles.topBarContainer}>
                <View style={styles.topBar}>
                    <View style={styles.searchBar}>
                        <View style={styles.imgCameraContainer}>
                            <Image
                                style={styles.imgCamera}
                                source={require("../../src/img/camera.png")}
                            />
                        </View>
                        <View style={styles.searchIconContainer}>
                            <View style={styles.searchIconFlex}>
                                <Image
                                    style={styles.searchIcon}
                                    source={require("../../src/img/search.png")}
                                />
                            </View>
                            <View style={styles.searchTextIput}>
                                <TextInput
                                    style={styles.searchTextIputPlaceholder}
                                    placeholder="Cari"
                                    placeholderTextColor="white"
                                />
                            </View>
                        </View>
                        <View style={styles.searchMessIconContainer}>
                            <Image
                                style={styles.searchMessIcon}
                                source={require("../../src/img/messenger.png")}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topBarContainer: {
        flex: 1
    },
    topBar: {
        height: 45,
        backgroundColor: "#4266B3"
    },
    searchBar: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#4266B3",
        paddingHorizontal: 5
    },
    imgCameraContainer: {
        flex: 1
    },
    imgCamera: {
        height: 34,
        width: 34,
        marginTop: 5
    },
    searchIconContainer: {
        flex: 8,
        flexDirection: "row",
        paddingHorizontal: 10,
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 10,
        borderBottomColor: "#CAC8CA",
        borderBottomWidth: 1
    },
    searchIconFlex: {
        flex: 1
    },
    searchIcon: {
        height: 14,
        width: 14,
        marginTop: 10
    },
    searchTextIput: {
        flex: 14
    },
    searchTextIputPlaceholder: {
        height: 35,
        color: "white"
    },
    searchMessIconContainer: {
        marginLeft: 10,
        flex: 1
    },
    searchMessIcon: {
        height: 34,
        width: 34,
        marginLeft: -8,
        marginTop: 5
    }
});
