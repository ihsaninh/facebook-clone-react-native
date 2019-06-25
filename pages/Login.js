import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    Button,
    StatusBar,
    TouchableOpacity,
    TouchableHighlight
} from "react-native";
import axios from "axios";
import { Navigation } from "react-native-navigation";
import Home from "./Home";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            lang: "English",
            email: "Telepon atau Email",
            password: "Kata Sandi",
            login: "Masuk",
            forgotPassword: "LUPA KATA SANDI?",
            or: "ATAU",
            createAccount: "BUAT AKUN FACEBOOK BARU",
            inputEmail: "",
            inputPassword: ""
        };
    }

    englishLang = () => {
        this.setState({
            lang: "Indonesia",
            email: "Telephone or Email",
            password: "Password",
            login: "Login",
            forgotPassword: "Forgot Password?",
            or: "OR",
            createAccount: "Create a New Account"
        });
    };

    handleLogin = () => {
        axios
            .post("http://192.168.0.26:3000/auth/signin", {
                email: this.state.inputEmail,
                password: this.state.inputPassword
            })
            .then(res => {
                const data = res.data.data;
                axios
                    .post(
                        "http://192.168.0.26:3000/auth/create/authorization",
                        {
                            user_id: data.id,
                            name: data.name,
                            email: data.email
                        }
                    )
                    .then(res => {
                        const status = res.data.status;
                        if (status === "OK") {
                            Navigation.push(this.props.componentId, {
                                component: {
                                    name: "Home"
                                }
                            });
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <ScrollView>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#30477C"
                    translucent={true}
                />
                <View style={styles.container}>
                    <View style={styles.banner}>
                        <Image
                            style={styles.bannerImg}
                            source={require("../src/img/banner.png")}
                        />
                    </View>
                    <View style={styles.content}>
                        <View style={styles.lang}>
                            <TouchableOpacity>
                                <Text onPress={this.englishLang}>
                                    {this.state.lang} •
                                </Text>
                            </TouchableOpacity>
                            <Text>Bahasa Malaysia • </Text>
                            <TouchableHighlight>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(true);
                                    }}>
                                    <Text>Lainnya</Text>
                                </TouchableHighlight>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.textInput}>
                            <TextInput
                                style={styles.formInput}
                                placeholder={this.state.email}
                                onChangeText={inputEmail =>
                                    this.setState({ inputEmail })
                                }
                            />
                            <TextInput
                                style={styles.formInput}
                                placeholder={this.state.password}
                                secureTextEntry={true}
                                onChangeText={inputPassword =>
                                    this.setState({ inputPassword })
                                }
                            />
                        </View>
                        <View style={styles.loginButton}>
                            <Button
                                title={this.state.login}
                                color="#4E68A2"
                                onPress={this.handleLogin}
                            />
                        </View>
                        <Text style={styles.textForgot}>
                            {this.state.forgotPassword}
                        </Text>
                    </View>
                    <View style={styles.orTextContainer}>
                        <View style={styles.orTextLine} />
                        <Text style={styles.orText}>{this.state.or}</Text>
                        <View style={styles.orTextLine} />
                    </View>
                    <View style={styles.signOutButton}>
                        <Button
                            style={styles.buttonSignOut}
                            title={this.state.createAccount}
                            color="#07A007"
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        flex: 1.7
    },
    content: {
        flex: 3,
        marginHorizontal: 20
    },
    bannerImg: {
        height: 184,
        width: "100%"
    },
    lang: {
        paddingTop: 10,
        color: "#707276",
        fontSize: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    textInput: {
        marginTop: 20
    },
    formInput: {
        height: 40,
        borderBottomColor: "#ECEAEC",
        borderBottomWidth: 1,
        marginBottom: 10
    },
    loginButton: {
        marginTop: 10
    },
    textForgot: {
        marginTop: 20,
        textAlign: "center"
    },
    signOutButton: {
        marginTop: 25,
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    orTextContainer: {
        flexDirection: "row",
        marginTop: 20
    },
    orTextLine: {
        width: "45%",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    },
    orText: {
        width: "10%",
        paddingLeft: 2,
        marginBottom: -6
    }
});
