import React, { Component } from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import Header from "./components/Header";
import { ListItem } from "react-native-elements";
import { Divider } from "react-native-elements";

class NavigationMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navLists: require("../data/navigationmenu.json")
        };
    }

    render() {
        const lists = [
            {
                name: "Ihsan Nurul Habib",
                avatar_url:
                    "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/60467814_2864130940479593_6101508434224480256_n.jpg?_nc_cat=104&efg=eyJpIjoidCJ9&_nc_eui2=AeEcBC4YhslIj3AkYv9PyOAEQK2l6d-3qKFRY9n1PvKX7xaXY7Y6n-NbaY0kbClfxQTEdN7mE2KJ78PfUkupSwTdY7z_kqBjGl0xQTGYIx5Qow&_nc_ht=scontent-sin6-2.xx&oh=ccfa3d79a35e9063757562522264005a&oe=5DC0192C",
                subtitle: "Lihat Profil Anda"
            },
            {
                name: "Ihsan Tutorial",
                avatar_url:
                    "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/14462755_651802221654841_199133480738668382_n.png.jpg?_nc_cat=109&efg=eyJpIjoidCJ9&_nc_eui2=AeG2RoTF6ts9hCEqFPm26Q289Ljw75kVLL4reFcAj-A896GymxZvkMjchN27DjBDvxpR4h963nLjqK1FNBr-wPlIxTHZRQx70M_F-PUJrb7PWw&_nc_ht=scontent-sin6-2.xx&oh=ff8fbc1a20bde7d766d61e9abf225a13&oe=5D809AA5",
                subtitle: "1 Baru"
            },
            {
                name: "Ihsan Nurul Habib",
                avatar_url:
                    "https://icons-for-free.com/iconfiles/png/512/flag+24px-131985190044767854.png",
                subtitle: ""
            }
        ];

        const navlists = [
            {
                name: "BKK SMK NEGERI 2 BOGOR",
                avatar_url: require("../src/img/BKK.png")
            },
            {
                name: "Teman",
                avatar_url: require("../src/img/friend.png")
            },
            {
                name: "Messenger",
                avatar_url: require("../src/img/messages.png")
            },
            {
                name: "Halaman",
                avatar_url: require("../src/img/pages.png")
            },
            {
                name: "Grup",
                avatar_url: require("../src/img/grouplist.png")
            },
            {
                name: "Marketplace",
                avatar_url: require("../src/img/marketplace.png")
            },
            {
                name: "Video di Watch",
                avatar_url: require("../src/img/watcht.png")
            },
            {
                name: "Acara",
                avatar_url: require("../src/img/event.png")
            },
            {
                name: "Kenangan",
                avatar_url: require("../src/img/memories.png")
            },
            {
                name: "Tersimpan",
                avatar_url: require("../src/img/saved.png")
            },
            {
                name: "Tempat di Sekitar",
                avatar_url: require("../src/img/location.png")
            },
            {
                name: "Teman di Sekitar",
                avatar_url: require("../src/img/friendnear.png")
            },
            {
                name: "Lihat Lainnya",
                avatar_url: require("../src/img/see-more.png")
            },
            {
                name: "Pengaturan dan Privasi",
                avatar_url: require("../src/img/settings-privacy.png")
            },
            {
                name: "Keluar",
                avatar_url: require("../src/img/logout.png")
            }
        ];
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
                    <View style={{ marginBottom: 80 }}>
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
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default NavigationMenu;
