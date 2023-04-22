import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';
import './style.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobrenome: '',
      email: '',
      senha: '',
      dataNascimento: '',
      dados: [],
    };

    this.gravar = this.gravar.bind(this);
    this.listar = this.listar.bind(this);
  }

  async gravar() {
    try {
      const auth = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha);
      await firebase.firestore().collection('usuario').doc(auth.user.uid).set({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        dataNascimento: this.state.dataNascimento,
      });
      alert('Gravado com sucesso!');
    } catch (error) {
      alert(`Erro ao gravar: ${error.message}`);
    }
  }

  listar() {
    firebase
      .firestore()
      .collection('usuario')
      .get()
      .then((retorno) => {
        var state = this.state;
        retorno.forEach((item) => {
          state.dados.push({
            id: item.id,
            nome: item.data().nome,
            sobrenome: item.data().sobrenome,
            dataNascimento: item.data().dataNascimento,
          });
        });
        this.setState(state);
      });
  }

  render() {
    return (
      <div className="register-container">
        <h1>CADASTRE-SE</h1>
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => this.setState({ email: e.target.value })}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => this.setState({ senha: e.target.value })}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => this.setState({ nome: e.target.value })}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Sobrenome"
          onChange={(e) => this.setState({ sobrenome: e.target.value })}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Data de Nascimento (DD/MM/AAAA)"
          onChange={(e) => this.setState({ dataNascimento: e.target.value })}
          className="form-input"
        />
        <button onClick={this.gravar} className="form-button">
          SALVAR
        </button>

        <button onClick={this.listar} className="form-button">
          Listar
        </button>
        <ul>
          {this.state.dados.map((item) => {
            return (
              <li key={item.id}>
                {item.nome} {item.sobrenome} - {item.dataNascimento}
              </li>
            );
          })}
        </ul>

        <div className="register-link">
          Já possui uma conta? <Link to="/">Faça login</Link>
        </div>
      </div>
    );
  }
}

export default Register;
