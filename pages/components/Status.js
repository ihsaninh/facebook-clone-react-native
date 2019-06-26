import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import StatusHeader from "./StatusHeader";
import Content from "./Content";
import Comment from "./Comment";
import FooterPost from "./FooterPost";
import axios from 'axios';

export default class Status extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // status: require("../../data/status.json")
            data: []
        };
    }

    componentDidMount() {
        axios.get('http://192.168.0.26:3000/feeds')
          .then(res => {
            const data = res.data;
            this.setState({ data });
          })
      }


    render() {
        return (
            <View>
                <View style={styles.lineBorder} />
                {this.state.data.map((item, index) => {
                    return (
                        <View key={index}>
                            <View style={styles.peopleStatusContainer}>
                                <StatusHeader
                                    name={item.user.name}
                                    postTime="2 jam yang lalu"
                                    peopleImg={{uri: item.user.avatar}}
                                />
                                <Content fill={item.status} />
                                <Comment
                                    likeCount="12"
                                    commentCount="89 komentar"
                                />
                                <FooterPost />
                            </View>
                            <View style={styles.lineBorder} />
                        </View>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    peopleStatusContainer: {
        flex: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    lineBorder: {
        borderColor: "#DDDDE4",
        borderWidth: 2
    }
});
