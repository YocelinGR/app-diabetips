import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import './LogIn.css';
import {
  Button, Row, Col,
  Input,
} from 'react-materialize';
import { Config } from './config';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import ManagePost from './managePost';
import NavBar from './NavBar';

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
          <div className = "NavBar">
            <NavBar />
          </div>
          <div className = "user-loged">
            <h3>Hoy serás una mejor versión de ti misma</h3>
            <h4>{firebase.auth().currentUser.displayName}</h4>
            <img alt = "foto de usuario" src= {firebase.auth().currentUser.photoURL} />
            <button className = "btn btn-floating pink lighten-1" onClick={() => firebase.auth().signOut()}>Salir</button>
          </div>
          <ManagePost />
          </div>
          
        ) : (
          <StyledFirebaseAuth uiConfig= {this.uiConfig} firebaseAuth = {firebase.auth()} />
        )}
      </div>
    )
  }
}
export default LogIn;
