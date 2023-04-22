import React, {Component} from "react"; 
import firebase from "../../Firebase";
import { Link } from 'react-router-dom';
import "./style.css";

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      senha: "",
      erro: null
    }

    this.acessar = this.acessar.bind(this);

  }

  async acessar(){

    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .then((retorno) => {
      window.location.href = "../Home";
    })
    .catch((erro) => {
      this.setState({erro: "Usuário ou senha inválidos."});
    });

  }

  render(){
    return(
      <div className="login-container">
        <h1>Login</h1>
        <input type="text" placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value})} />
        <br/>
        <input type="password" placeholder="Senha" onChange={(e) => this.setState({senha: e.target.value})} />
        <br/>
        <button onClick={this.acessar}>Acessar</button>
        <br/>
        <Link to="/Register">Criar uma conta</Link>
        {this.state.erro && <p>{this.state.erro}</p>}
      </div>
    )
  }
}

export default Login;
