import React from "react";
import { View, Text } from "react-native";
import { style } from "./styles";

type Props = {
    caption:string,
    color:string,
    selected:boolean
}

export function Flag({...rest}:Props) {
    return (
        <View 
            style={[
                style.container,
                {backgroundColor:rest?.color},
                rest?.selected && {borderWidth: 1.5}
            ]}    
        >
            <Text style={{color: '#FFF'}}>
                {rest.caption}
            </Text>
        </View>
    )
}