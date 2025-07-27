import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    SafeAreaView,
    TouchableOpacity,
    StatusBar
} from 'react-native';

function AppPro(): JSX.Element {
    const systemTheme = useColorScheme();
    const [manualTheme, setManualTheme] = useState<'dark' | 'light' | null>(null); // null means follow system theme
    
    // Determine current theme: manual override or system theme
    const isDarkMode = manualTheme !== null ? manualTheme === 'dark' : systemTheme === 'dark';
    
    // Toggle between dark, light, and system theme
    const toggleTheme = () => {
        if (manualTheme === null) {
            // Currently following system -> Switch to opposite of current system theme
            setManualTheme(systemTheme === 'dark' ? 'light' : 'dark');
        } else if (manualTheme === 'dark') {
            // Currently dark -> Switch to light
            setManualTheme('light');
        } else {
            // Currently light -> Switch back to system
            setManualTheme(null);
        }
    };
    
    // Get theme status text
    const getThemeStatus = () => {
        if (manualTheme === null) {
            return `System (${systemTheme === 'dark' ? 'Dark' : 'Light'})`;
        }
        return manualTheme === 'dark' ? 'Dark' : 'Light';
    };
    
    // Dynamic styles based on current theme
    const dynamicStyles = {
        container: {
            ...styles.container,
            backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
        },
        text: {
            color: isDarkMode ? '#FFFFFF' : '#000000',
            fontSize: 18,
        },
        button: {
            backgroundColor: isDarkMode ? '#4CAF50' : '#2196F3',
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 25,
            marginTop: 20,
            shadowColor: isDarkMode ? '#000' : '#ccc',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
        },
        buttonText: {
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '600' as const,
            textAlign: 'center' as const,
        },
        themeStatus: {
            color: isDarkMode ? '#cccccc' : '#666666',
            fontSize: 14,
            marginTop: 10,
            fontStyle: 'italic' as const,
        }
    };

    return (
        <SafeAreaView style={dynamicStyles.container}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkMode ? '#1a1a1a' : '#f5f5f5'}
            />
            
            <View style={styles.content}>
                {/* Main Text */}
                <Text style={dynamicStyles.text}>
                    Hello World!
                </Text>
                
                {/* Theme Status */}
                <Text style={dynamicStyles.themeStatus}>
                    Current Theme: {getThemeStatus()}
                </Text>
                
                {/* Theme Toggle Button */}
                <TouchableOpacity 
                    style={dynamicStyles.button}
                    onPress={toggleTheme}
                    activeOpacity={0.8}
                >
                    <Text style={dynamicStyles.buttonText}>
                        {isDarkMode ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
                    </Text>
                </TouchableOpacity>
                
                {/* Instructions */}
                <View style={styles.instructions}>
                    <Text style={dynamicStyles.themeStatus}>
                        Tap the button to cycle through:
                    </Text>
                    <Text style={dynamicStyles.themeStatus}>
                        System → Dark → Light → System
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    instructions: {
        marginTop: 30,
        alignItems: 'center',
        gap: 5,
    },
});

export default AppPro;