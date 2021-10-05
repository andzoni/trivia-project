import React from 'react';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
  render() {
    return (
      <div className="ranking-main">
        <h1 data-testid="ranking-title">RANKING</h1>
        <ol>
          lista de jogadores
        </ol>
        <Link to="/" data-testid="btn-go-home">Deslogar ⏼</Link>
      </div>
    );
  }
}

export default Ranking;
