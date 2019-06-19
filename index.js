import { Navigation } from "react-native-navigation";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";

Navigation.registerComponent("Login", () => Login);
Navigation.registerComponent("Home", () => Home);
Navigation.registerComponent("MarketPlace", () => MarketPlace);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                id: "AppStack",
                children: [
                    {
                        component: {
                            name: "Login"
                        }
                    }
                ]
            }
        }
    });
});

Navigation.setDefaultOptions({
    topBar: {
        visible: false
    },
    layout: {
        backgroundColor: "white"
    }
});
