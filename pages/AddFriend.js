import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Header from "./components/Header";
import AddFriendList from "./components/AddFriendList";
import ButtonOpacity from "./components/ButtonOpacity";

class AddFriend extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: require("../data/addfriends.json")
        };
    }
    render() {
        return (
            <View style={styles.addfriendContainer}>
                <Header componentId={this.props.componentId} />
                <ScrollView>
                    <View style={styles.addfriendWrapper}>
                        <View style={styles.topWrapper}>
                            <View style={styles.friendlist}>
                                <ButtonOpacity buttonText="Permintaan" />
                                <ButtonOpacity buttonText="Semua Teman" />
                            </View>
                        </View>
                        <Text style={styles.title}>
                            Orang yang Mungkin Anda Kenal
                        </Text>
                        {this.state.list.map((item, index) => {
                            return (
                                <View key={index}>
                                    <AddFriendList
                                        addFriendImg={{ uri: item.photo }}
                                        addFriendName={item.name}
                                        addFriendMutual={item.mutualfriends}
                                    />
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default AddFriend;

const styles = StyleSheet.create({
    addfriendContainer: {
        flex: 1
    },
    addfriendWrapper: {
        marginHorizontal: 10
    },
    topWrapper: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#CED2D7"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#1C1E21",
        paddingTop: 5
    },
    friendlist: {
        flexDirection: "row"
    }
});
