import PropTypes from 'prop-types';
import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { sendPlayerInfo } from '../actions';
import { Navbar, Container } from 'react-bootstrap';

class Header extends Component {
  render() {
    const { name, gravatarEmail, score } = this.props;
    const hashGerada = md5(gravatarEmail.trim().toLowerCase()).toString();
    const gravatarAvatar = `https://www.gravatar.com/avatar/${hashGerada}`;

    return (
      <header className="main-header">
        <Navbar bg="light" fixed="top">
          <Container>
            <img data-testid="header-profile-picture" src={ gravatarAvatar } alt="Player" />
            <Navbar.Brand>
              <h2 data-testid="header-player-name">
                {`Jogador: ${name}`}
              </h2>
            </Navbar.Brand>
            <Navbar.Brand>
              <h2 data-testid="header-score">
                { `Pontuação: ${score}` }
              </h2>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
    );
  }
}

Header.propTypes = {
  gravatarEmail: PropTypes.shape({
    trim: PropTypes.func,
  }),
  name: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  gravatarEmail: state.user.gravatarEmail,
  name: state.user.name,
  score: state.play.player.score,
});

const mapDispatchToProps = (dispatch) => ({
  submitPlayer: (payload) => dispatch(sendPlayerInfo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
