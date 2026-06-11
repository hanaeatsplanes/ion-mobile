import {Text, View, Linking, Pressable, Button} from "react-native";
import {router} from "expo-router";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>Edit app/index.tsx to edit this screen.</Text>
			
			<Button onPress={() => router.push("/login")} title={"Go to Login"}>
			</Button>
		</View>
	);
}
