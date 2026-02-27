import { Stack ,Slot,Link} from "expo-router"
import { StyleSheet,Text,View} from "react-native"
const DasboardLayout = ()=> {
return <View>
        <Stack/>
        <Text style={styles.header}>app name</Text>
        <Link href="/dashboard">Ira dashboard</Link>
        <Link href="/dashboard/perfil">Ir a perfil</Link>
    </View>
}

const styles = StyleSheet.create({
    header:{
        height:120,
        backgroundColor:'#1234',
        color:'#fff'

    }
});
export default DasboardLayout