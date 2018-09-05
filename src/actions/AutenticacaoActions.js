import firebase from 'firebase';
import React from 'react';
import {Actions} from 'react-native-router-flux';
import b64 from 'base-64';
import {
    Alert
} from 'react-native';
import {
    MODIFICA_EMAIL,             
    MODIFICA_SENHA,             
    MODIFICA_NOME,            
    CADASTRO_USUARIO_SUCESSO,    
    CADASTRO_USUARIO_ERRO,   
    AUTENTICACAO_USUARIO_SUCESSO,
    AUTENTICACAO_USUARIO_ERRO,
    LOADING
} from './types'

export const modificaEmail = (texto) =>{
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    }
}
export const modificaSenha = (texto) => {
    return {
        type: MODIFICA_SENHA,
        payload: texto
    }
}
export const modificaNome = (texto) => {
    return {
        type: MODIFICA_NOME,
        payload: texto
    }
}

export const cadastraUsuario = ({nome,email,senha}) =>{

    return dispatch => {
        
        dispatch({type: LOADING});

        firebase.auth().createUserWithEmailAndPassword(email,senha)
        .then(user =>{
            let emailB64 = b64.encode(email);
            
            firebase.database().ref(`contatos/${emailB64}`)
                .push({nome})
                .then(value =>cadastraUsuarioSucesso(dispatch));
        })
        .catch(erro => cadastraUsuarioErro(erro,dispatch));
    }
    
}

const cadastraUsuarioErro = (erro,dispatch) => {
    Alert.alert(
        'Erro ao cadastar',
        'Ocorreu um erro ao cadastar o usuário, talvez esse email já exista',
        [
          {text: 'OK', onPress: () => console.log('OK')},
        ],
        { cancelable: false }
    );
      dispatch (
        {
          type: CADASTRO_USUARIO_ERRO, payload: erro.message
        }
    );
};
const cadastraUsuarioSucesso = (dispatch) => {
      dispatch (
          {
            type: CADASTRO_USUARIO_SUCESSO
          }
      );
      Actions.boasVindas();
};

export const autenticarUsuario = ({email,senha}) => {
    return dispatch =>{

        dispatch({type: LOADING});

        firebase.auth().signInWithEmailAndPassword(email,senha)
            .then(user => autenticarUsuarioSucesso(dispatch))
            .catch(erro => autenticarUsuarioErro(dispatch));
    }
    
    
}

const autenticarUsuarioSucesso = (dispatch) => {
    dispatch (
        {
            type: AUTENTICACAO_USUARIO_SUCESSO
        }
    );
    Actions.principal();

}
const autenticarUsuarioErro = (dispatch) => {
    Alert.alert(
        'Erro ao entrar',
        'Ocorreu um erro na autenticação do usuário, verifique se o email e senha estão corretos',
        [
          {text: 'OK', onPress: () => console.log('OK')},
        ],
        { cancelable: false }
    );
    dispatch (
        {
            type: AUTENTICACAO_USUARIO_ERRO
        }
    );
    
}