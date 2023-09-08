import { View, Text } from "react-native";

export default function LittleLemonFooter() {
    return (
        <View
            style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "#F4CE14",
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: "black",
                    textAlign: "center",
                }}
            >
                All rights reserved by Little Lemon, 2022
            </Text>
        </View>
    );
}
