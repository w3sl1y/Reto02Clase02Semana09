import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export function Buttons () {
    return (
        <TouchableOpacity
        style={styles.button}>
            <Text style={styles.create}>+</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#ee9b00',
        padding: 10,
        borderRadius: 50,
        width: 60,
        height: 60,
        alignItems: 'center',
        margin: 10
    },
    create:{
        color: '#212121',
        fontSize: 28,
        textAlign: 'center',
    }
})