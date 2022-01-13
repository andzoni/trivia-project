import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

class Config extends Component {
  render() {
    return (
      <Card className="text-center">
        <Card.Header>
          <h1 data-testid="settings-title">Configurações</h1>
        </Card.Header>
        <Card.Body>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="dark">
            <Link 
              style={{ color: 'inherit', textDecoration: 'inherit'}} 
              to="/" 
              data-testid="btn-go-home">Voltar</Link>
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}

export default Config;
