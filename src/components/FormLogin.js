<<<<<<< HEAD
import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {
    modificaEmail,
    modificaSenha,
    autenticarUsuario
} from '../actions/AutenticacaoActions';
class FormLogin extends Component{
    _autenticarUsuario(){
        const {email,senha} = this.props;
        this.props.autenticarUsuario({email,senha});
    }
    
    renderBtnAcessar(){
        if(this.props.loading){
            return (
                <ActivityIndicator size="large"/>
            )

        }
        return (
            <Button
                title = "Acessar"
                color='#115E54'
                onPress={()=> this._autenticarUsuario()}
            />
        )
        
    }
    render(){
        return(
            <View style={styles.conteiner}>

            <View  style={ [{flex:1},styles.posicaoCentral]}>  
                <Text style={styles.h1}>Mensageiro</Text>
            </View>
            
            <View  style={{flex:2}}>
            
                <TextInput value={this.props.email} onChangeText={texto => this.props.modificaEmail(texto)} style={styles.input} textContentType={'emailAddress' } keyboardType={'email-address'} placeholder ='E-mail'/>
                <TextInput value={this.props.senha} onChangeText={texto => this.props.modificaSenha(texto)} style={styles.input} textContentType={'password'} secureTextEntry={true} placeholder ='Senha'/>
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
        senha: state.AutenticacaoReducer.senha,
        loading: state.AutenticacaoReducer.loading
    }
);

=======
import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {
    modificaEmail,
    modificaSenha,
    autenticarUsuario
} from '../actions/AutenticacaoActions';
class FormLogin extends Component{
    _autenticarUsuario(){
        const {email,senha} = this.props;
        this.props.autenticarUsuario({email,senha});
    }
    
    renderBtnAcessar(){
        if(this.props.loading){
            return (
                <ActivityIndicator size="large"/>
            )

        }
        return (
            <Button
                title = "Acessar"
                color='#115E54'
                onPress={()=> this._autenticarUsuario()}
            />
        )
        
    }
    render(){
        return(
            <View style={styles.conteiner}>

            <View  style={ [{flex:1},styles.posicaoCentral]}>  
                <Text style={styles.h1}>Mensageiro</Text>
            </View>
            
            <View  style={{flex:2}}>
            
                <TextInput value={this.props.email} onChangeText={texto => this.props.modificaEmail(texto)} style={styles.input} textContentType={'emailAddress' } keyboardType={'email-address'} placeholder ='E-mail'/>
                <TextInput value={this.props.senha} onChangeText={texto => this.props.modificaSenha(texto)} style={styles.input} textContentType={'password'} secureTextEntry={true} placeholder ='Senha'/>
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
        senha: state.AutenticacaoReducer.senha,
        loading: state.AutenticacaoReducer.loading
    }
);

>>>>>>> da7452b0df93ba1f21f0eda98b30f60dca9414f4
export default connect(mapStateToProps,{modificaEmail,modificaSenha, autenticarUsuario})(FormLogin);