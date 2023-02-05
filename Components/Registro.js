import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView ,Animated, Dimensions, Image, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import InputField from './InputField';
import CustomButton from './CustomButton';


//Materiales
import BGimage from '../assets/misc/registration.png'


const BGColor = "#4D4A95"

const fetchFonts = () =>
  Font.loadAsync({
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
});

const Register = ({navigation}) => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [dobLabel, setDobLabel] = useState('Fecha de Nacimiento');

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
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{paddingHorizontal: 25}}>
                <View style={{alignItems: 'center'}}>
                <Image 
                    source={BGimage} 
                    style={{height: 250, width: 300, resizeMode: 'contain', transform: [{rotate: '-5deg'}]}} 
                />
                </View>
                <View style={{backgroundColor:'#fff',borderRadius:10, padding:30}}>
                    <Text
                    style={{
                        fontFamily: 'Roboto-Medium',
                        fontSize: 28,
                        fontWeight: '500',
                        color: '#333',
                        marginBottom: 30,
                    }}>
                    Registro
                    </Text>

                    <InputField
                    label={'Nombre Completo'}
                    icon={
                        <Ionicons
                        name="person-outline"
                        size={20}
                        color="#666"
                        style={{marginRight: 5}}
                        />
                    }
                    />

                    <InputField
                    label={'Correo Electronico'}
                    icon={
                        <MaterialIcons
                        name="alternate-email"
                        size={20}
                        color="#666"
                        style={{marginRight: 5}}
                        />
                    }
                    keyboardType="email-address"
                    />

                    <InputField
                    label={'Contraseña'}
                    icon={
                        <Ionicons
                        name="ios-lock-closed-outline"
                        size={20}
                        color="#666"
                        style={{marginRight: 5}}
                        />
                    }
                    inputType="password"
                    />

                    <InputField
                    label={'Confirma Contraseña'}
                    icon={
                        <Ionicons
                        name="ios-lock-closed-outline"
                        size={20}
                        color="#666"
                        style={{marginRight: 5}}
                        />
                    }
                    inputType="password"
                    />

                    <View
                    style={{
                        flexDirection: 'row',
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        paddingBottom: 8,
                        marginBottom: 30,
                    }}>
                    <Ionicons
                        name="calendar-outline"
                        size={20}
                        color="#666"
                        style={{marginRight: 5}}
                    />
                    <TouchableOpacity onPress={() => setOpen(true)}>
                        <Text style={{color: '#666', marginLeft: 5, marginTop: 5}}>
                        {dobLabel}
                        </Text>
                    </TouchableOpacity>
                    </View>
                    {open && (
                    <RNDateTimePicker   
                    locale='es-ES'
                    dateFormat='day month year'                 
                    value={date}
                    mode='date'
                    onChange={(e) => {
                        console.log(new Date(e.nativeEvent.timestamp).toISOString().split('T')[0]);
                        setDate(new Date(e.nativeEvent.timestamp));
                        setOpen(false);
                        setDobLabel((new Date(e.nativeEvent.timestamp)).toISOString().split('T')[0]);
                    }}
                    />
                    )}

                    <CustomButton label={'Registrar'} onPress={() => {}} />

                    <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                    }}>
                    <Text>Ya se ha registrado?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{color: '#AD40AF', fontWeight: '700'}}> Inciar Sesion</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Register