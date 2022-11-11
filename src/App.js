import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

const App = () => {
  return (
    <div>
      <h1 className='title'>Phone Book</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;