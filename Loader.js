import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Loader = () => {
    const {container, text} = styles;
    return (
        <View style={container}>
            <Text style={text}>Weathermann</Text>
        </View>
    )
}

// RN에서, flexDirection의 디폴트는 'column'
// layout 코딩에 활용할 수 있는 "flex" (일정 비율에 따르도록 설정?)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-end",
        backgroundColor: "#FCF3A9",
        paddingHorizontal: 30,
        paddingVertical: 50
    },
    text: {
        fontSize: 25,
        color: "#2c2c2c"
    }
});

export default Loader;