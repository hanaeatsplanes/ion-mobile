import {Text, View, Linking, Pressable} from "react-native";
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
			<Pressable onPress={() => router.push("/login")}>
				<Text>Go to Login</Text>
			</Pressable>
		</View>
	);
}
