import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import { Button, Icon, Row, Col, Footer
       } from 'react-materialize';

class Home extends Component {
  render() {
    return (
      <div className= "App">
        <section className="container">
            <Col s={10}>
                <img src= "https://github.com/YocelinGR/cdmx-2018-06-bc-core-am-social-network/blob/master/src/images/LogoDiabeTips.png?raw=true" />
              </Col>
          </section>
        <div className= "app-carousel">
              <Col s={2}>
              <p>Mejoremos juntas nuestra calidad de vida.</p>
            </Col>
              <Col s={10}>
              <img src ="https://github.com/YocelinGR/cdmx-2018-06-bc-core-am-social-network/blob/master/src/images/mexicanDiab.jpg?raw=true" />
            </Col>
            </div>
        <Footer className="App-footer">
              <Col s={12}>
                <a className= "btn-footer" id="unirse">UNIRSE</a>
                <a className ="btn-footer" id="iniciar">INICIAR</a>
              </Col>
            </Footer>
      </div>
    );
  }
}

export default Home;