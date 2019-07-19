import React, { Component } from "react";
import { View, Image, ScrollView, TouchableOpacity, AsyncStorage } from "react-native";
import Header from "./components/Header";
import { ListItem } from "react-native-elements";
import { Divider } from "react-native-elements";
import { Navigation } from "react-native-navigation";
import { lists, navlists } from "./smallData/navlist"

class NavigationMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navLists: require("../data/navigationmenu.json")
        };
    }

    handleLogout = async () => {
        const token = await AsyncStorage.getItem('token')
        AsyncStorage.removeItem('token');
        Navigation.setStackRoot(this.props.componentId, [
            {
            component: {
                  name: 'Login',
                }
             }
        ]);
    }

    render() {
        return (
            <View>
                <Header componentId={this.props.componentId} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        {lists.map((item, index) => (
                        <TouchableOpacity key={index}>
                            <ListItem
                                leftAvatar={{
                                    height: 30,
                                    width: 30,
                                    source: { uri: item.avatar_url }
                                }}
                                title={item.name}
                                subtitle={item.subtitle}
                                titleStyle={{ fontSize: 16, color: "#212326" }}
                            />
                        </TouchableOpacity>
                        ))}
                    </View>
                    <Divider style={{ backgroundColor: "#CED2D7" }} />
                    <View style={{ marginBottom: 120 }}>
                        {navlists.map((navlist, index) => (
                            <TouchableOpacity  key={index}>
                            <ListItem
                                leftAvatar={
                                    <Image
                                        style={{ height: 30, width: 30 }}
                                        source={navlist.avatar_url}
                                    />
                                }
                                title={navlist.name}
                                titleStyle={{ fontSize: 16, color: "#212326" }}
                                size={50}
                            />
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity onPress={this.handleLogout}>
                            <ListItem
                                leftAvatar={
                                    <Image
                                        style={{ height: 30, width: 30 }}
                                        source={require("../src/img/logout.png")}
                                    />
                                }
                                title="Keluar"
                                titleStyle={{ fontSize: 16, color: "#212326" }}
                                size={50}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default NavigationMenu;
