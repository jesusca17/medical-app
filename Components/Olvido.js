import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView ,Animated, Dimensions, Image, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Ionicons from 'react-native-vector-icons/Ionicons';


//Materiales
import BGimage from '../assets/misc/login.png'


const BGColor = "#4D4A95"

const fetchFonts = () =>
  Font.loadAsync({
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
});

const Forget = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    if(!fontLoaded){
        return (
            <AppLoading 
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
                onError={(err) => console.log(err)}
            />
        );
    }

    return (
        <SafeAreaView style={{ flex:1,justifyContent:'center',backgroundColor: BGColor}}>
            <View style={{paddingHorizontal:25}}>
                <View style={{alignItems: 'center'}}>
                    <Image source={BGimage} style={{height: 250, width: 300, resizeMode: 'contain', transform: [{rotate: '-5deg'}]}} />
                </View>
                <View style={{backgroundColor:'#fff',borderRadius:10, padding:30, height: 350}}>
                <Text style={{fontFamily: 'Roboto-Medium', fontSize: 28, fontWeight:'500', color:'#333',marginBottom: 30}}>Forget</Text>                
                <View style={{flexDirection: 'row', borderBottomColor:'#ccc', borderBottomWidth:1,paddingBottom: 8, marginBottom:25}}>
                    <Ionicons name='ios-at-outline' size={20} color='#666' style={{marginRight: 5}} />
                    <TextInput placeholder='Correo electronico' style={{flex:1, paddingVertical: 0}} keyboardType="email-address"/>
                </View>
                <View style={{flexDirection: 'row', borderBottomColor:'#ccc', borderBottomWidth:1,paddingBottom: 8, marginBottom:25}}>
                    <Ionicons name='ios-lock-outline' size={20} color='#666' />
                    <TextInput placeholder='Contraseña' style={{flex:1, paddingVertical: 0}} secureTextEntry={true}/>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={{color: '#AD40AF', fontWeight: '700'}}>Olvidaste?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => {}} style={{backgroundColor: '#AD40AF', padding:20,borderRadius:10,marginBottom:30}}>
                    <Text style={{textAlign:'center',fontWeight:'700',fontSize:16,color:'#fff'}}>Entrar</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', justifyContent:'center',marginBottom:30}}>
                    <Text>Eres nuevo en la app?</Text>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={{color: '#ad40af',fontWeight:'700'}}>Registrate</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Forget