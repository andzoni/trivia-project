import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

class Ranking extends React.Component {
  render() {
    return (
      <Card className="text-center">
        <Card.Header>
          <h1 data-testid="ranking-title">RANKING</h1>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <ol>
              lista de jogadores
            </ol>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="dark">
            <Link 
              style={{ color: 'inherit', textDecoration: 'inherit'}} 
              to="/" 
              data-testid="btn-go-home">Deslogar ⏼</Link>
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}

export default Ranking;
