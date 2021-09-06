import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import ContactRow from '../components/ContactRow'
import Separator from "../components/Separator";

const Chats = () => {
    return (
        <SafeAreaView>
            <ContactRow
                name="Ömer Hodo"
                subtitle="Nerdesin?"
                onPress={() => {
                    alert("omer hodo")
                }}
            />
            <Separator/>
            <ContactRow 
                name="Yc"
                subtitle="haberleşiriz!"
                onPress={() => {
                    alert("omer hodo")
                }}
            />
            <Separator/>
            <ContactRow 
                name="mc"
                subtitle="harun gelmez"
            />
            <Separator/>
            <ContactRow 
                name="hd"
                subtitle="mustafa gelmez:D"
            />
        </SafeAreaView>
    )
}

export default Chats