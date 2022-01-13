import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const AVERAGE = 3;
class FeedbackMSG extends React.Component {
  render() {
    const { score, assertions } = this.props;
    return (
      <Card className="text-center">
        <Card.Header>
          <h2 data-testid="feedback-text">
            {(assertions >= AVERAGE ? 'Mandou bem!' : 'Podia ser melhor...')}
          </h2>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <h3 data-testid="feedback-total-score">
            {`Você ganhou ${score} pontos!`}
            </h3>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text>
            <h3 data-testid="feedback-total-question">
              {`Você acertou ${assertions} perguntas! `}
            </h3>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

FeedbackMSG.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};
export default FeedbackMSG;
