<<<<<<< HEAD
import {
    MODIFICA_ADICIONA_CONTATO_EMAIL,
    ADICIONA_CONTATO_ERRO,
    ADICIONA_CONTATO_SUCESSO

} from '../actions/types';

const INITIAL_STATE = {
    adiciona_contato_email: '',
    cadastro_resultado_txt_erro: '',
    cadastro_resultado_inclusao: false
};

export default (state = INITIAL_STATE, action) =>{

    switch(action.type){
        case MODIFICA_ADICIONA_CONTATO_EMAIL:
            return {...state, adiciona_contato_email: action.payload}
        case ADICIONA_CONTATO_ERRO:
            return {...state, cadastro_resultado_txt_erro: action.payload}
        case ADICIONA_CONTATO_SUCESSO:
            return {...state, cadastro_resultado_inclusao: action.payload, adiciona_contato_email: '' }
        default:
            return state;
            
    }
}
=======
import {
    MODIFICA_ADICIONA_CONTATO_EMAIL,
    ADICIONA_CONTATO_ERRO,
    ADICIONA_CONTATO_SUCESSO

} from '../actions/types';

const INITIAL_STATE = {
    adiciona_contato_email: '',
    cadastro_resultado_txt_erro: '',
    cadastro_resultado_inclusao: false
};

export default (state = INITIAL_STATE, action) =>{

    switch(action.type){
        case MODIFICA_ADICIONA_CONTATO_EMAIL:
            return {...state, adiciona_contato_email: action.payload}
        case ADICIONA_CONTATO_ERRO:
            return {...state, cadastro_resultado_txt_erro: action.payload}
        case ADICIONA_CONTATO_SUCESSO:
            return {...state, cadastro_resultado_inclusao: action.payload, adiciona_contato_email: '' }
        default:
            return state;
            
    }
}
>>>>>>> da7452b0df93ba1f21f0eda98b30f60dca9414f4
