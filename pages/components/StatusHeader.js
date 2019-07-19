import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Modal,
    TextInput,
    AsyncStorage
} from "react-native";
import { Icon } from "react-native-elements";
import { ListItem } from "react-native-elements";
import axios from "axios";

export default class StatusHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisibleInfo: false
        };
    }

    setmodalVisibleInfo(visible) {
        this.setState({ modalVisibleInfo: visible });
    }

    handleDelete = async (id) => {
        const token = await AsyncStorage.getItem('token')
        const headers = {
            'Authorization': 'Bearer ' + token,
        }
        var id = id
        axios.delete(`http://192.168.0.26:3000/posts/${id}`,{headers: headers})
            .then((res) => {
                this.setState({modalVisibleInfo: !this.state.modalVisibleInfo});
                alert('data berhasil dihapus')
            })
            .catch((error) => {
                alert(error);
            })
        }

    // handleUpdate = async (id) => {
    //      const token = await AsyncStorage.getItem('token')
    //      const headers = {
    //         'Authorization': 'Bearer ' + token,
    //       }
    //      const data = {
    //        post: this.state.post
    //      }
    //      const post = this.state.post
    //      axios.put(`http://192.168.0.26:3000/posts/${id}`, data, {headers: headers})
    //       .then((res) => {
    //           Navigation.pop(this.props.componentId);
    //       })
    //       .catch((error) => {
    //         alert(error);
    //       })
    //     }
    
    render() {
        const edit = require("../../src/img/account.png");
        return (
            <View style={styles.singlePostContainer}>
                <Modal
                    style={{ height: 300, width: 300 }}
                    animationType="slide"
                    hardwareAccelerated={true}
                    transparent={true}
                    visible={this.state.modalVisibleInfo}
                    onRequestClose={() => {
                        this.setmodalVisibleInfo(!this.state.modalVisibleInfo);
                    }}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative"
                        }}>
                        <View
                            style={{
                                height: "20%",
                                backgroundColor: "#ddd",
                                position: "absolute",
                                borderTopColor: '#ccc',
                                borderTopWidth: 1,
                                bottom: 0,
                                right: 0,
                                left: 0
                            }}>
                            <View>
                            <TouchableOpacity onPress={() => this.handleUpdate(this.props.id)}>
                                <ListItem
                                   leftIcon={{ type: 'material', name: 'edit' }}
                                    title="Edit status"
                                    titleStyle={{
                                        fontSize: 16,
                                        color: "#212326"
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handleDelete(this.props.id)}>
                                <ListItem
                                    style={{ marginTop: -15 }}
                                    leftIcon={{ type: 'material', name: 'delete' }}
                                    title="Delete status"
                                    titleStyle={{
                                        fontSize: 16,
                                        color: "#212326"
                                    }}
                                />
                              </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                
                <View style={styles.singlePostImg}>
                    <Image
                        style={styles.singlePostImgPic}
                        source={this.props.peopleImg}
                    />
                </View>
                <View style={styles.singlePostAuthor}>
                    <Text style={styles.singlePostAuthorName}>
                        {this.props.name}
                    </Text>
                    <View styles={{ flexDirection: "row" }}>
                        <Text style={styles.singlePostTime}>
                            {this.props.postTime} •
                            <Image
                                style={styles.singlePostPrivacy}
                                source={require("../../src/img/world.png")}
                            />
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={
                        (onPress = () => {
                            this.setmodalVisibleInfo(true);
                        })
                    }>
                    <View style={styles.singlePostMore}>
                        <Icon name="more-horiz" type="material" color="#333" />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    singlePostContainer: {
        flex: 1,
        flexDirection: "row",
        margin: 12
    },
    singlePostImgPic: {
        height: 30,
        width: 30,
        borderRadius: 25,
        marginTop: 3
    },
    singlePostAuthor: {
        flex: 9,
        paddingLeft: 5
    },
    singlePostAuthorName: {
        fontWeight: "bold",
        fontSize: 17
    },
    singlePostTime: {
        fontSize: 14
    },
    singlePostMore: {
        flex: 1
    },
    singlePostPrivacy: {
        width: 12,
        height: 12
    }
});
