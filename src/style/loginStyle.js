import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
        flexDirection: 'row'
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
