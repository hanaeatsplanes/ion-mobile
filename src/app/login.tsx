import {Button, Text, View} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import {useEffect} from "react";
import * as AuthSession from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

const discovery = {
    authorizationEndpoint: 'https://ion.tjhsst.edu/oauth/authorize/',
    tokenEndpoint: 'https://ion.tjhsst.edu/oauth/token/',
};

export default function Login() {
    useEffect(() => {
        void WebBrowser.warmUpAsync();
        
        return () => {
            void WebBrowser.coolDownAsync();
        };
    }, []);
    const deepUrl = AuthSession.makeRedirectUri({ path: "oauth" })
    const [request, response, promptAsync] = AuthSession.useAuthRequest(
        {
            clientId: process.env.EXPO_PUBLIC_ION_CLIENT_ID,
            scopes: ["read", "write"],
            redirectUri: "https://hanaeatsplanes.github.io/ion-mobile-redirect/", // redirects to the app
            state: deepUrl
        },
        discovery
    )
    
    useEffect(() => {
        if (response?.type === 'success') {
            const { code } = response.params;
        }
    }, [response]);
    
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={{ textDecorationStyle: "double" }}>Login with Ion?</Text>
            <Text>This information will stay purely on your device.</Text>
            <Button
                disabled={!request}
                title="Login"
                onPress={() => {
                    void promptAsync();
                }}
            />
        </View>
    );
}
