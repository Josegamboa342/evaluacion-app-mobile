import{StyleSheet,Text,View} from "react-native"
const PerfilScreen = ()=>{
    return <View>
        <Text style={styles.header}>app name</Text>
        <Text>Hola desde perfil del usuario!!!</Text>
    </View>
}
export default PerfilScreen;

const styles = StyleSheet.create({
    header:{
        height:120,
        backgroundColor:'#1234',
        color:'#fff'

    }
})
