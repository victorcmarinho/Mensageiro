import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';

class FormCadastro extends React.Component {
    render(){
        return(
            <View style={styles.conteiner}>

            <View  style={{flex:4, justifyContent: 'center'}}>
            
                <TextInput value={this.props.nome} style={styles.input} placeholder = 'Nome Completo'/>
                <TextInput value={this.props.email} style={styles.input} placeholder = 'E-mail'/>
                <TextInput value={this.props.senha} style={styles.input} placeholder = 'Senha'/>
               
            </View>
            
            <View  style={{flex:1}}>
                
                <Button
                    title = "Cadastrar"
                    color='#115E54'
                    onPress={()=> false}
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
        email:  state.AutenticacaoReducer.email,
        senha:  state.AutenticacaoReducer.senha,
        nome:   state.AutenticacaoReducer.nome   
    }
);

export default connect(mapStateToProps,null)(FormCadastro);