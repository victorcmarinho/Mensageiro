<<<<<<< HEAD
import React from 'react';
import {
    View,
    Text,
    Button,
    Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default props => (
    <View style={{flex:1, padding: 15}}>
        <View style={{flex:2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20 }}>Seja Bem Vinda</Text>
            <Image source={require('../imgs/logo.png')}/>
        </View>
        <View  style={{flex:1}}>
            <Button title = 'Fazer Login' onPress={()=>Actions.formLogin()}/>
        </View>
    </View>
)
=======
import React from 'react';
import {
    View,
    Text,
    Button,
    Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default props => (
    <View style={{flex:1, padding: 15}}>
        <View style={{flex:2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20 }}>Seja Bem Vinda</Text>
            <Image source={require('../imgs/logo.png')}/>
        </View>
        <View  style={{flex:1}}>
            <Button title = 'Fazer Login' onPress={()=>Actions.formLogin()}/>
        </View>
    </View>
)
>>>>>>> da7452b0df93ba1f21f0eda98b30f60dca9414f4
