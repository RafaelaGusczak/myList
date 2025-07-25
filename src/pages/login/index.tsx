import React, { useState } from "react";

import { View, 
         Text, 
         Image,      
         Alert,     
} from "react-native";
import { style } from "./styles";
import Logo from '../../assets/logo.png'
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { themes } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { useNavigation,NavigationProp } from "@react-navigation/native";

export default function Login() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true)
    const [loading, setLoading] = useState(false);

    
    async function getLogin() {
        try {
            setLoading(true)
            
            if(!email ||!password){
                return Alert.alert('Atenção','Informe os campos obrigatórios!')
            }

            navigation.reset({routes:[{name:"BottomRoutes"}]})

            console.log('LOGOU')
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }


    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO E-MAIL"
                    IconRight={MaterialIcons}
                    IconRightName="email"
                />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA"
                    IconRight={Octicons}
                    IconRightName={showPassword?"eye-closed":"eye"}
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />
            </View>
            <View style={style.boxBottom}>
                <Button text="ENTRAR" loading={loading} onPress={()=>getLogin()}/>
            </View>
            <Text style={style.textBottom}>Não tem conta? <Text style={{color: themes.colors.primary}}>Crie agora!</Text></Text>
        </View>
    )
}