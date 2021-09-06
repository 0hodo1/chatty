import React from "react";
import {View, StyleSheet} from 'react-native'

const Separator = () => {
    return(
        <View style={style.separator}/>
    )
}

const style = StyleSheet.create({
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#E2E2E2',
        marginStart: 88,
        marginEnd: 16
    }
})

export default Separator