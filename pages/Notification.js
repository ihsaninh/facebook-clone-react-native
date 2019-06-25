import React, { Component } from "react";

import { StyleSheet, View, Text, ScrollView } from "react-native";
import Header from "./components/Header";
import NotificationList from "./components/NotificationList";
import { Divider } from "react-native-elements";
import AddFriendList from "./components/AddFriendList";

class Notification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: require("../data/addfriends.json")
        };
    }
    render() {
        let data = this.state.list;
        let smallData = data.slice(0, 3);
        return (
            <View>
                <Header componentId={this.props.componentId} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.notificationWrapper}>
                        <View>
                            <Text style={styles.notificationheaderTitle}>
                                Lebih Awal
                            </Text>
                            <Divider style={styles.dividerStyle} />
                        </View>
                        <NotificationList
                            authorImg={require("../src/img/photostatus.jpg")}
                            from="Muhammad Taufik Lewenussa"
                            to="Angga Syahputra Utama"
                            time="2 jam yang lalu"
                        />
                        <NotificationList
                            authorImg={{
                                uri:
                                    "https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/prod/2014/08/BillGatesHeadshot.jpg"
                            }}
                            from="Bill Gates"
                            to="Mark Zuckerberg"
                            time="2 jam yang lalu"
                        />
                        <NotificationList
                            authorImg={{
                                uri:
                                    "https://avatars0.githubusercontent.com/u/1024025?s=460&v=4"
                            }}
                            from="Linus Torvalds"
                            to="Bill Gates"
                            time="2 jam yang lalu"
                        />
                        <View>
                            <Text style={styles.notificationheaderTitle}>
                                Permintaan Pertemanan
                            </Text>
                            <Divider style={styles.dividerStyle} />
                        </View>
                        {smallData.map((item, index) => {
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
                    <View style={{ marginTop: 80 }} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    notificationWrapper: {
        margin: 10
    },
    notificationheaderTitle: {
        fontWeight: "bold"
    },
    dividerStyle: {
        backgroundColor: "#CED2D7",
        marginTop: 10
    }
});

export default Notification;
