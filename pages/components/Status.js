import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import TimeAgo from 'react-native-timeago';
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
            posts: []
        };
    }

    componentDidMount() {
        axios.get('http://192.168.0.26:3000/feeds')
          .then(res => {
            console.log(res.data[0].user.name)
            const posts = res.data;
            this.setState( { 
                posts: posts
            });
          })
      }

    render() {
        return (
            <View>
                <View style={styles.lineBorder} />
                {this.state.posts.map((post, index) => {
                    return (
                        <View key={index}>
                            <View style={styles.peopleStatusContainer}>
                                <StatusHeader
                                    name={post.user.name}
                                    postTime={<TimeAgo time={post.createdAt} />}
                                    peopleImg={{uri: post.user.avatar}}
                                />
                                <Content fill={post.status} />
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
