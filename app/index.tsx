
import React, { useState } from "react";
import { Button, Text, View , TextInput, StyleSheet} from "react-native";
import { Redirect } from "expo-router";
import { Link } from "expo-router";

type TSaludo = {
 show: Boolean
}
const Saludo = (props:TSaludo)=>{
   if(props.show){
    return  <Text>Hola mundo!!!!!!</Text>;
   }
   return<></> 
}

const IndexScreen = () => {
    const [show,setShow] = useState<Boolean>(false);
    const [textBtn, setTextBtn] = useState<string>('Saludar');

   return<View style={estilos.container}> 
        <Button 
           title={textBtn}   
           onPress={()=>{
             setShow(valor=>!valor);
             setTextBtn(show?'Ocultar saludos':'Saludar');
           }}
        />
        {show? <Text>Hola mundo!!!!!!</Text>:<></> }
        <Saludo show={show}/>
        <TextInput
        style={estilos.input}
        placeholder="Ingrese el nombre de la persona"
        value={textBtn}
        //onChangeText={setTextBtn}
        onChangeText={(value)=>{setTextBtn(value)}}
        />
         <Redirect href={'/login'}/> 
    </View>
}

export default IndexScreen;

const estilos =StyleSheet.create( {
    container:{
        flex: 1,
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1999'
    },
    input:{
      paddingBlock:16,
      borderWidth:1,
      borderColor:'#0000',
      borderRadius:14,
      padding:8,
      height:36
    }
   });