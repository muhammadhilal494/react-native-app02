import React from "react";
import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                Hello World!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Make the container fill the screen
        justifyContent: 'center', // Push content to the bottom
        alignItems: 'center', // Align content to the right
        backgroundColor: '#808080', // Light gray background color
    },
    whiteText: {
        color: '#FFFFFF',
        fontSize: 18, // Optional: Make text more visible
    },
    darkText: {
        color: '#000000',
        fontSize: 18, // Optional: Make text more visible
    },
});

export default AppPro;
