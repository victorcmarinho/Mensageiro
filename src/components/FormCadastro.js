import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';
import {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario,
} from '../actions/AutenticacaoActions';
class FormCadastro extends React.Component {
    _cadastraUsuario(){
        const cadastro = [{nome:this.props.nome, email:this.props.email, senha:this.props.senha }];
        this.props.cadastraUsuario(...cadastro);
    }
    renderBtnAcessar(){
        if(this.props.loading){
            return (
                <ActivityIndicator size="large"/>
            )

        }
        return (
            <Button
                title = "Cadastrar"
                color='#115E54'
                onPress={()=> this._cadastraUsuario()}
            />
        )
        
    }
    render(){
        return(
            <View style={styles.conteiner}>

            <View  style={{flex:4, justifyContent: 'center'}}>
            
                <TextInput value={this.props.nome} onChangeText={texto => this.props.modificaNome(texto)} style={styles.input} placeholder = 'Nome Completo'/>
                <TextInput value={this.props.email} onChangeText={texto => this.props.modificaEmail(texto)} textContentType={'emailAddress' } keyboardType={'email-address'} style={styles.input} placeholder = 'E-mail'/>
                <TextInput value={this.props.senha} onChangeText={texto => this.props.modificaSenha(texto)} secureTextEntry={true} textContentType={'password'}  style={styles.input} placeholder = 'Senha'/>

            
            </View>
            
            <View  style={{flex:1}}>
                
                {this.renderBtnAcessar()}
    
            </View>
        
    
        </View>
        );
    }
} 



const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        padding:10,
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
    },
    erro:{
        color:'white',
        fontSize: 18,
        backgroundColor: 'red',
    }
});

const mapStateToProps = state =>(
    {
        email:  state.AutenticacaoReducer.email,
        senha:  state.AutenticacaoReducer.senha,
        nome:   state.AutenticacaoReducer.nome,
        loading: state.AutenticacaoReducer.loading  
    }
);

export default connect(
    mapStateToProps,
    {
        modificaEmail,
        modificaSenha,
        modificaNome,
        cadastraUsuario,
        
    }
)(FormCadastro);