import React, { Component } from 'react';
import './LogIn.css';
import {
  Button, Row, Col,
  Input,
} from 'react-materialize';
import { Config } from './config';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import managePost from './managePost';

/*
class LogIn extends Component {
  render() {
    return (
      <div>
        <Row className="Header-Login">
          <Col s={10}>
            <img src="https://github.com/YocelinGR/cdmx-2018-06-bc-core-am-social-network/blob/master/src/images/LogoDiabeTips.png?raw=true" />
          </Col>
        </Row>
        <Row>
          <Col s={10}>
            <h3>Iniciar sesión</h3>
          </Col>
        </Row>
        <Row>
          <Col s={11} className="notRegistryYet">
            <h5>Ingresa tus datos: </h5>
            <Input type="email" label="Email" s={10} />
            <Input type="password" label="Password" s={10} />
            <p s={10}>Nosotros nunca compartiremos tu información con nadie.</p>
            <Input s={10} name="group1" type="checkbox" value="remember" label="Recuerdame" />
            <div className="signBtn">
              <Button id="registrarBtn" waves="light">Registrar</Button>
            </div>
            <p s={10}>o también puedes ...</p>
          </Col>
        </Row>
        <Row>
          <div className="signBtn">
            <Button waves="light" id="btnGmail"><i className="fa fa-google">     Gmail</i></Button>
            <Button waves="light" id="btnFacebook"><i className="fa fa-facebook-official">     Facebook</i></Button>
          </div>
          <div className="notRegistryYet">
            <p s={10}>No estas registrado</p>
            <p s={10}>Registrate aquí.</p>
          </div>
        </Row>
      </div>
    );
  }
} 
firebase.initializeApp({
  apiKey: "AIzaSyBoO-dyO4PywqOJJVLDAucttJLMlM5N3vs",
    authDomain: "diabetipsoficial.firebaseapp.com",
    databaseURL: "https://diabetipsoficial.firebaseio.com",
    projectId: "diabetipsoficial",
    storageBucket: "diabetipsoficial.appspot.com",
    messagingSenderId: "1025645095828"
});*/

class LogIn extends Component{
  state = { isSignedIn: false}
  uiConfig = {
    signInFlow: "redirect",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      sigInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user})
      console.log("user", user);
    });
  }

  render() {
    return(
      <div className= "LogInStyle">
        {this.state.isSignedIn ? (
          <div>
          <div>
            <div>Hola, hoy serás una mejor versión de ti misma</div>
            <button onClick={() => firebase.auth().signOut()}>Salir</button>
            <h1>Diabeamigo: {firebase.auth().currentUser.displayName}</h1>
            <img alt = "foto de usuario" src= {firebase.auth().currentUser.photoURL} />
          </div>
          <managePost />
          </div>
          
        ) : (
          <StyledFirebaseAuth uiConfig= {this.uiConfig} firebaseAuth = {firebase.auth()} />
        )}
      </div>
    )
  }
}
export default LogIn;
