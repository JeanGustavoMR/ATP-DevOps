import React, { Component } from "react";
import firebase from "../../Firebase.js";
import { Link } from "react-router-dom";
import "./style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
    };
  }

  async componentDidMount() {
    alert("Usuário logado com sucesso! Bem-vindo à página inicial.");
    await firebase.auth().onAuthStateChanged(async (usuario) => {
      if (usuario) {
        var uid = usuario.uid;

        await firebase
          .firestore()
          .collection("usuario")
          .doc(uid)
          .get()
          .then((retorno) => {
            this.setState({
              nome: retorno.data().nome,
              sobrenome: retorno.data().sobrenome,
              dataNascimento: retorno.data().dataNascimento,
            });
          });
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Bem-vindo à página inicial</h1>
        </div>
        <div className="details">
          <div className="detail">
            <span className="name">Nome:</span>
            <span className="value">{this.state.nome}</span>
          </div>
          <div className="detail">
            <span className="name">Sobrenome:</span>
            <span className="value">{this.state.sobrenome}</span> <br/>
          </div>
          <div className="detail">
            <span className="name">Data de Nascimento:</span>
            <span className="value">{this.state.dataNascimento}</span>
          </div>
           <Link to="/" className="logout"> Sair </Link>
          </div>
      </div>
    );
  }
}

export default Home;

