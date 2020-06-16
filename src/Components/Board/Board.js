

import React from 'react';

import './Board.css';

import Square from './Square';
import { connect } from 'react-redux';
import { updateStepnumber, updateHistory, jump, change } from '../../actions/actions';





const mapDispatchToProps = (dispatch) => {
  return {
    increaseStep: () => { dispatch(updateStepnumber()) },
    updateHistory: (arg1, arg3) => { dispatch(updateHistory(arg1, arg3)) },
    jumpTo: (step) => { dispatch(jump(step)) },
    changePlayer: (bool) => { dispatch(change(bool)) }
  }
}

const mapStateToProps = state => {
  return {
    stepNumber: state.stepnumber,
    history: state.history.history,
    XIsNext: state.history.xIsNext


  }
}

class Board extends React.Component {

  renderSquare(i) {

    return (<Square
      value={this.props.squares[i - 1]}
      onClick={() => this.props.onClick(i - 1)}
    />
    );

  }

  render() {

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>

        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>

        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
      </div>
    );
  }


}

class Game extends React.Component {




  handleClick(i) {






    this.props.updateHistory(i, this.props.stepNumber);


    const current = this.props.history[this.props.stepNumber];


    if (calculateWinner(current.squares) || current.squares[i]) {
      return;
    }
    this.props.increaseStep();


  }


  jumpTo(step) {




    (step % 2 === 0) ? this.props.changePlayer(true) :
      this.props.changePlayer(false);



    this.props.jumpTo(step);
  }




  render() {


    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);





    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (

        move < 9 ?



          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
          :
          ""
      );
    });



    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.props.XIsNext ? 'X' : 'O');
    }

    return (

      <div className="centerContainer">
        <div className="game">


          <div className="game-board">
            <div className="header">Play TicToc!</div>
            <div className="status">{status}</div>
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
        </div>
        <div className="game-info">
          <ol>{moves}</ol>

        </div>
      </div>
    );
  }
}





function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}



export default connect(mapStateToProps, mapDispatchToProps)(Game);