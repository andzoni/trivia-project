import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FeedbackMSG from '../components/FeedbackMSG';
import Header from '../components/Header';
import { Button, Card } from 'react-bootstrap';

class Feedback extends React.Component {
  render() {
    const { score, assertions } = this.props;
    return (
      <>
        <Header />
        <br/>
        <br/>
        <br/>
        <Card className="text-center">
          <Card.Body>
            <Card.Text>
              <FeedbackMSG score={ score } assertions={ assertions } />
            </Card.Text>
            <Button variant="dark" type="button" data-testid="btn-play-again">
              <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/ranking">Ranking &#127942;</Link>
            </Button>
          </Card.Body>
          <Card.Footer>
            <Button variant="dark" type="button" data-testid="btn-play-again">
              <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/play">Jogar Novamente</Link>
            </Button>
          </Card.Footer>
        </Card>
      </>
    );
  }
}

const mapStateToProps = ({ play: { player: { score, assertions } } }) => ({
  score,
  assertions,
});

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};
export default connect(mapStateToProps, null)(Feedback);
