import React, { Component } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, Button, Modal, TouchableHighlight, TextInput, AsyncStorage} from "react-native";
import axios from "axios";
import { Navigation } from "react-native-navigation";
import { Icon } from 'react-native-elements'

export default class AddStatus extends Component {

    // gotoScreen = (screenName) => {
    //    Navigation.push(this.props.componentId, {
    //         component: {
    //             name: "MarketPlace"
    //         }
    //     });
    // };

    constructor(props) {
      super(props);
    
      this.state = {
        modalVisible: false,
        post: ''
      };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

     handleCreate = async () => {
         const token = await AsyncStorage.getItem('token')
         const headers = {
            'Authorization': 'Bearer ' + token,
          }
         const post = this.state.post
         const user_id = 2
         data = {
             post,
             user_id,
             headers,
         }
         console.log(data)
         axios.post('http://192.168.0.26:3000/posts', data)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          })
        }

    render() {
        const upload = require("../../src/img/upload.png");
        return (
            <View>
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}>
                  <View style={{height: 50, borderBottomWidth: 1, borderBottomColor: '#eef'}}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={{marginLeft: 10, marginTop: 12}} onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}>
                            <Icon
                              name='arrow-back'
                              type='material'
                              color='#333'
                            />
                        </TouchableOpacity>
                        <Text style={{marginLeft: 10,marginTop: 13, fontSize: 20, fontWeight: '500', color: '#333'}}>Tambah Postingan</Text>
                        <View>
                            <TouchableOpacity onPress={this.handleCreate}>
                                <Text style={{marginTop: 15, marginLeft: 90, fontSize: 16, fontWeight: '500', textTransform: 'uppercase', color: '#ccc'}}>Kirim</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                  </View>

                  <View style={{flexDirection: 'row', margin: 10, }}>
                      <View>
                          <Image style={{height: 50, width: 50, borderRadius: 100}} source={{uri: 'https://id.gravatar.com/userimage/129559065/df8f7bdab54b67ad8a17c82009d0c5f6?size=300'}}></Image>
                      </View>
                      <Text style={{fontWeight: 'bold', color: '#333', fontSize: 16,marginLeft: 10}}>Ihsan Nurul Habib</Text>
                  </View>
                   <View style={{marginTop: -40, marginLeft: 70, flexDirection: 'row'}}>
                      <View style={{height:28, width: 75, borderWidth: 1, borderColor: '#ccc', borderRadius: 10}}>
                          <View style={{flexDirection: 'row'}}>
                              <Image style={{height: 12, width: 12, marginTop: 5, marginLeft: 5}} source={require('../../src/img/world.png')} />
                              <Text style={{fontWeight: '500', paddingLeft: 3, paddingTop: 4}}>Public</Text>
                              <View style={{marginLeft: -3}}> 
                                  <Icon
                                  name='arrow-drop-down'
                                  type='material'
                                  color='#333'
                                />
                            </View>
                          </View>
                      </View>
                      <View style={{height:28, width: 75, borderWidth: 1, borderColor: '#ccc', borderRadius: 10, marginLeft: 5}}>
                          <View style={{flexDirection: 'row'}}>
                              <View style={{marginLeft: 4}}> 
                                  <Icon
                                  name='plus-small'
                                  type='octicon'
                                  color='#333'
                                />
                            </View>
                              <Text style={{fontWeight: '500', paddingLeft: 3, paddingTop: 4}}>Album</Text>
                              <View style={{marginLeft: -3}}> 
                                  <Icon
                                  name='arrow-drop-down'
                                  type='material'
                                  color='#333'
                                />
                            </View>
                          </View>
                      </View>
                    </View>
                  <View>
                      <TextInput
                        multiline={true}
                        numberOfLines={2}
                        placeholder="Apa yang Anda pikirkan" style={{margin: 10, fontSize: 25}} onChangeText={post =>
                                    this.setState({ post })
                                }
                       />
                  </View>

                </Modal>
                <View style={styles.addStatus}>
                    <View style={styles.addStatusContainer}>
                        <View style={styles.addStatusPic}>
                            <Image
                                style={styles.addStatusPicture}
                                source={this.props.photo}
                            />
                        </View>
                    </View>
                        <View style={styles.textInputContainer}>
                            <TouchableOpacity onPress={onPress=() => {
            this.setModalVisible(true)}}>
                               <Text style={styles.textInputText}>Apa yang anda pikirkan</Text>
                            </TouchableOpacity>
                        </View>
                    <View style={styles.statusUploadContainer}>
                        <View style={styles.statusUpload}>
                            <Image
                                style={styles.statusImageUpload}
                                source={upload}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.lineBorder} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addStatus: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5
    },
    addStatusPic: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    addStatusPicture: {
        height: 35,
        width: 35,
        borderRadius: 25
    },
    TextInputStatus: {
        paddingHorizontal: 10,
        height: 35,
        borderColor: "#DDDDE4",
        borderWidth: 1,
        marginTop: 2,
        borderRadius: 20
    },
    statusUpload: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    peopleStatusContainer: {
        flex: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    addStatusContainer: {
        flex: 2
    },
    textInputContainer: {
        borderRadius: 20, 
        flex: 12, 
        borderColor: 'grey', 
        borderWidth: 1, 
        paddingVertical: 8, 
        marginLeft: 5
    },
    textInputText: {
        paddingLeft: 10
    },
    statusUploadContainer: {
        flex: 2
    },
    statusImageUpload: {
        height: 28,
        width: 20
    },
    lineBorder: {
        borderColor: "#DDDDE4",
        borderWidth: 3
    }
});
