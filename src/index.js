import React from 'react';
import ReactDOM from 'react-dom';
import Square from './components/Square' // um Square
import Board from './components/Board' // um Board que usa vários Squares
import './index.css'

//Renderiza um Board
class Game extends React.Component {
    render () {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />, document.getElementById('root')
);
