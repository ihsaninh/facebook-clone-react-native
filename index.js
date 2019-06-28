import { Navigation } from "react-native-navigation";
import { routeScreen } from "./pages/routeScreen";

routeScreen();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                id: "App",
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
        drawBehind: true,
        visible: false,
        animate: false
    },
    layout: {
        backgroundColor: "white"
    }
});

console.disableYellowBox = true;
