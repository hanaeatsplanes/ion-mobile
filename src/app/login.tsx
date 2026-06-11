import { Text, View } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import {useEffect} from "react";
import * as AuthSession from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

const discovery = {
    authorizationEndpoint: 'https://ion.tjhsst.edu/oauth/authorize/',
    tokenEndpoint: 'https://ion.tjhsst.edu/oauth/token/',
    revocationEndpoint: 'https://github.com/settings/connections/applications/<CLIENT_ID>',
};

export default function Login() {
    useEffect(() => {
        void WebBrowser.warmUpAsync();
        
        return () => {
            void WebBrowser.coolDownAsync();
        };
    }, []);
    
    const [request, response, promptAsync] = AuthSession.useAuthRequest(
        {
            clientId: process.env.ION_CLIENT_ID,
            
        }
    )
    
    AuthSession.makeRedirectUri({
    
    })
    
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
        </View>
    );
}
