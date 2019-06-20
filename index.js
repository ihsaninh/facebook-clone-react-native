import {Navigation} from 'react-native-navigation'
import {routeScreen} from './pages/routeScreen';

routeScreen()

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
        visible: false
    },
    layout: {
        backgroundColor: "white"
    }
});
