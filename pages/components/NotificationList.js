import React, { Component } from "react";

import { StyleSheet, View, Image, Text } from "react-native";

class NotificationList extends Component {
    render() {
        return (
            <View style={styles.notificationContentWrapper}>
                <View style={styles.notificationPostImgWrapper}>
                    <Image
                        style={styles.notificationPostImg}
                        source={this.props.authorImg}
                    />
                </View>
                <View style={styles.notificationFillWrapper}>
                    <View>
                        <Text style={styles.notificationFillText}>
                            <Text style={styles.notificationFillAuthor}>
                                {this.props.from}
                            </Text>{" "}
                            membalas komentar Anda di foto{" "}
                            <Text style={styles.notificationFillAuthor}>
                                {this.props.to}
                            </Text>
                        </Text>
                        <Text style={styles.notificationPostTime}>
                            {this.props.time}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    notificationContentWrapper: {
        flexDirection: "row",
        marginVertical: 10
    },
    notificationPostImgWrapper: {
        flex: 3
    },
    notificationPostImg: {
        height: 60,
        width: 60,
        borderRadius: 100
    },
    notificationFillWrapper: {
        flex: 10
    },
    notificationFillText: {
        lineHeight: 20
    },
    notificationFillAuthor: {
        fontWeight: "bold"
    },
    notificationPostTime: {
        fontSize: 10,
        paddingTop: 3
    },
    notificationMore: {
        flex: 1,
        paddingTop: 20
    }
});

export default NotificationList;
