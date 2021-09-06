import React from "react";
import {Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'


const ContactRow = ({name, subtitle, onPress}) => {
    return (
        <TouchableOpacity style={styles.row} onpress={onPress}>
            <View style={styles.avatar}>
                <Text style={styles.avatarLabel}>
                    {name.split(' ').reduce((prev, current) => `${prev}${current[0]}`,'')}
                </Text>
            </View>
            <View style={styles.textsContainers}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 20

    },
    name:{
        fontSize: 16,
    },
    subtitle:{
        marginTop: 2,
        color: '#565656'
    },
    textsContainers: {
        flex:1,
        marginStart:16,
    },
    avatar:{
        width:56,
        height:56,
        borderRadius:28,
        backgroundColor: '#2196f3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarLabel: {
        fontSize:20,
        color: 'white'
    }
})

export default ContactRow;