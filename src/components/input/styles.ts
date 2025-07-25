import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
     boxInput: {
        width:'100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: themes.colors.bgScreen,
        borderColor: themes.colors.lightGray   
    },
    input: {
        height: '100%',
        width: '90%',
        borderRadius: 40,
    },
     titleInput: {
        marginTop: 20,
        marginLeft: 5,
        color: themes.colors.gray
    },
    Icon: {
        width: '100%'
    },
    Button: {
        width: '10%'
    }
   
})