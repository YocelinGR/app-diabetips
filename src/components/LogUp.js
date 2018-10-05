import React, { Component } from 'react';
import './LogUp.css';
import {
  Button, Icon, Row, Col,
  Footer, Input, s,
} from 'react-materialize';

class LogUp extends Component {
  render() {
    return (
      <div>
        <Col s={10}>
                  <h4 s={10}>Por favor, ingresa tus datos: </h4>
                  <Input s={10} label="Nombre Completo" />
                  <Input s={10} label="Nombre de Usuario" />
                  <Input type="password" label="Password" s={10} />
                  <Input type="email" label="Email" s={10} />
                  <Input s={10} name="on" type="date" label="Cumpleaños" onChange={function (e, value) {}} />
                  <Input s={10} type="select" label="País">
                    <option value="1">Perú</option>
                    <option value="2">México</option>
                    <option value="3">Brasil</option>
                    <option value="3">Chile</option>
                  </Input>
                  <Input s={10} name="group1" type="checkbox" value="remember" label="Recuerdame" />
                  <p s={10}>Nosotros nunca compartiremos tu información con nadie.</p>
                  <div className="signBtn">
                    <Button id="registrarBtn" waves="light">Hecho!</Button>
                  </div>
                </Col>
      </div>
    );
  }
}

export default LogUp;