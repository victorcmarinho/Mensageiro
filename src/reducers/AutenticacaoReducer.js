import {
    MODIFICA_EMAIL,             
    MODIFICA_SENHA,             
    MODIFICA_NOME,            
    CADASTRO_USUARIO_SUCESSO,    
    CADASTRO_USUARIO_ERRO,   
    AUTENTICACAO_USUARIO_SUCESSO,
    AUTENTICACAO_USUARIO_ERRO,
    LOADING,

} from '../actions/types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erro: '',
    loading: false
    
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type){

        case MODIFICA_EMAIL:
            return { ...state, email: action.payload };
        case MODIFICA_SENHA:
            return {...state, senha: action.payload};
        case MODIFICA_NOME:
            return {...state, nome: action.payload};
        case CADASTRO_USUARIO_SUCESSO:
            return {...state, nome: '', senha: '', loading: false};
        case CADASTRO_USUARIO_ERRO:
            return {...state, loading: false};
        case AUTENTICACAO_USUARIO_SUCESSO:
            return {...state, loading: false};
        case AUTENTICACAO_USUARIO_ERRO:
            return {...state, loading: false};
        case LOADING:
            return {...state, loading: true};

            
        default:
            return state;
    }
}