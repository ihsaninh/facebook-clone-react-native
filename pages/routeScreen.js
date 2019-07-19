import { Navigation } from "react-native-navigation";

import App from "../App";
import Login from "./Login";
import Home from "./Home";
import MarketPlace from "./MarketPlace";
import AddFriend from "./AddFriend";
import NavigationMenu from "./NavigationMenu";
import Notfound from "./Notfound";
import Notification from "./Notification";
import EditPost from "./EditPost"

export function routeScreen() {
    Navigation.registerComponent("Login", () => Login);
    Navigation.registerComponent("MarketPlace", () => MarketPlace);
    Navigation.registerComponent("Home", () => Home);
    Navigation.registerComponent("AddFriend", () => AddFriend);
    Navigation.registerComponent("NavigationMenu", () => NavigationMenu);
    Navigation.registerComponent("Notfound", () => Notfound);
    Navigation.registerComponent("Notification", () => Notification);
    Navigation.registerComponent("AddStatus", () => AddStatus);
    Navigation.registerComponent("EditPost", () => EditPost);
}
