import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default class Item extends Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}