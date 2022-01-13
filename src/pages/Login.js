import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { sendPlayerInfo, sendUserInfo } from '../actions';
import { TokenApi } from '../services';
import { Button, Form, Navbar, Container, Nav, Row, Col, FormControl } from 'react-bootstrap';



class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      authEmail: true,
      authName: true,
      name: '',
      gravatarEmail: '',
      shouldRedirect: false,
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.validateName = this.validateName.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  async formSubmit(event) {
    event.preventDefault();
    const { gravatarEmail, name } = this.state;
    const { submitUser, submitPlayer } = this.props;
    submitUser(({ gravatarEmail, name }));
    submitPlayer(({ gravatarEmail, name, score: 0, assertions: 0 }));
    const response = await TokenApi();
    this.setState({ shouldRedirect: response });
  }

  validateEmail({ target }) {
    const { value } = target;
    const regex = /\S+@\S+\.\S+/; // Gesse Turma 13A
    if (regex.test(value)) {
      return this.setState({
        authEmail: false,
        gravatarEmail: value,
      });
    }
    return this.setState({
      authEmail: true,
      gravatarEmail: value,
    });
  }

  validateName({ target }) {
    const { value } = target;
    const MIN_LENGTH_NAME = 1;
    if (value.length >= MIN_LENGTH_NAME) {
      return this.setState({
        authName: false,
        name: value,
      });
    }
    return this.setState({
      authName: true,
      name: value });
  }

  render() {
    const { authEmail, authName, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/play" />;
    }
    return (
      <Navbar className="me-auto" expand="lg" bg="dark" variant="dark" fixed="top">
        <Container xs="auto">
          <Navbar.Brand href="/">
            <h3>Trivia Game</h3>
          </Navbar.Brand>
        </Container>
        <Container xs={8}> 
            <Nav>
              <Form onSubmit={ this.formSubmit }>
                <Row>
                  <Col xs={5}>
                    <Form.Label htmlFor="name" visuallyHidden>
                      Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      data-testid="input-player-name"
                      className="mb-2"
                      id="name"
                      placeholder="Name"
                      onChange={ this.validateName }
                    />
                  </Col>
                  <Col xs={5}>
                    <Form.Label htmlFor="login" visuallyHidden>
                      Login
                    </Form.Label>
                    <FormControl
                      className="mb-2" 
                      id="login"
                      type="text"
                      data-testid="input-gravatar-email" 
                      placeholder="Email"
                      onChange={ this.validateEmail }
                    />
                  </Col>
                  <Col xs="auto">
                    <Button
                      variant="light" 
                      disabled={ authEmail || authName }
                      type="submit"
                      data-testid="btn-play"
                      >
                      Jogar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Nav>
          </Container>

          <Container xs="auto">
            <Col xs={8}>
            <br/>
            </Col>
            <Button
              variant="light"
              type="button">
              <Nav.Link 
                xs={4}
                style={{ color: 'inherit', textDecoration: 'inherit'}} 
                href="/config">Configurações
              </Nav.Link>
            </Button>
          </Container>
      </Navbar>
    );
  }
}

Login.propTypes = {
  submitUser: PropTypes.func,
  submitPlayer: PropTypes.func,
}.isRequired;

const mapDispachToProps = (dispatch) => ({
  submitUser: (payload) => dispatch(sendUserInfo(payload)),
  submitPlayer: (payload) => dispatch(sendPlayerInfo(payload)),
});
export default connect(null, mapDispachToProps)(Login);
