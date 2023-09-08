import { View, Text } from "react-native";

export default function WelcomeScreen() {
    return (
        <View>
            <Text
                style={{
                    marginTop: 10,
                    fontWeight: "bold",
                    fontSize: 24,
                    color: "white",
                    textAlign: "center",
                }}
            >
                Welcome to Little Lemon
            </Text>
            <Text
                style={{
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                    color: "white",
                    textAlign: "center",
                }}
            >
                Little Lemon is a charming neighborhood bistro that serves simple food and classic
                cocktails in a lively but casual environment. We would love to hear more about your
                experience with us!
            </Text>
        </View>
    );
}
