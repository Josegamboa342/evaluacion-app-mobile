import{Text,View,Button} from "react-native"
import {router} from "expo-router"
const LoginScreen = ()=>{
    return <View>
        <Text>Hola desde login</Text>
        <Button
            title="Ir a dashboard"
            onPress={()=>{
                router.navigate("/dashboard")

            }
            }
        />
    </View>
}
export default LoginScreen;