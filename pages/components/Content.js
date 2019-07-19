import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Content extends Component {
    render() {
        return (
            <View style={styles.singlePostContent}>
                <Text style={styles.singlePostContentFill}>{this.props.fill}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    singlePostContent: {
        marginHorizontal: 10
    },
    singlePostContentFill: {
        lineHeight: 20,
    }
});
