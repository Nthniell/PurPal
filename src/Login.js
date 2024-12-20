import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config";


const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <View style={style.container}>
            <Text style={{fontWeight: 'bold', fontSize: 26}}>
                Login
            </Text>
            <View style={{marginTop: 40}}>
                <TextInput
                    style={style.TextInput}
                    placeholder='Email'
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    
                />
                <TextInput
                    style={style.TextInput}
                    placeholder='Password'
                    onChangeText={(password) => setPassword(password)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity
                onPress={() => loginUser(email, password)} 
                style={style.button}
            >
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Registration')} 
                style={{marginTop: 20}}
            >
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                    Don't have an account? Register Now
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    TextInput: {
        paddingTop: 20,
        paddingBottom: 10,
        width: 400,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 10,
        textAlign: 'center'
    },
    button: {
        height: 70,
        width: 250,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 20
    }
})