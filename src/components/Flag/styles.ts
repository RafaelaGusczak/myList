import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";


export const style = StyleSheet.create({
   container: {
        width: 70,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.red,
        borderRadius: 4
   }
})