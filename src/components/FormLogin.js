import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

class FormLogin extends Component{
    render(){
        return(
            <View style={styles.conteiner}>

            <View  style={ [{flex:1},styles.posicaoCentral]}>  
                <Text style={styles.h1}>Mensageiro</Text>
            </View>
            
            <View  style={{flex:2}}>
            
                <TextInput value={this.props.email} style={styles.input} placeholder ='E-mail'/>
                <TextInput value={this.props.senha} style={styles.input} placeholder ='Senha'/>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Text style={{fontSize: 20}}>Ainda não tem cadastro? </Text>
                    <TouchableHighlight
                        onPress={() => {Actions.formCadastro();}}
                    >
                        <Text style={{fontSize: 20}}> Cadastre-se </Text>
                    </TouchableHighlight>
                </View>    
                
            
            </View>
            
            <View  style={{flex:2}}>
                
                <Button
                    title = "Acessar"
                    color='#115E54'

                    onPress={()=> { Actions.formCadastro();}}
                />
    
            </View>
        
    
        </View>
    
        );
    }
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        padding:10,
        marginTop: 25,
        backgroundColor : '#fff'
    },
    h1:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    posicaoCentral:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        padding: 10,
        fontSize: 20
    }
});

const mapStateToProps = state =>(
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

export default connect(mapStateToProps,null)(FormLogin);