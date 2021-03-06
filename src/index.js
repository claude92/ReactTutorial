import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// class Square extends React.Component {
//   render() {
//     return (
//       //funzione come prop onClick
//       <button
//         className="square"
//         onClick={() => this.props.onClick()}>
//         { this.props.value}
//       </button >
//     );
//   }
// }
function Square(props) {
    return (<button className="square"
        onClick={props.onClick}>
        {props.value}
    </button>);
}

class Board extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     squares: Array(9).fill(null),
    //     xIsNext: true
    //   }
    // }
    // handleClick(i) {
    //   const squares = this.state.squares.slice();
    //   squares[i] = this.state.xIsNext ? 'X' : 'O';
    //   this.setState({ squares: squares, xIsNext: !this.state.xIsNext })
    // }
    renderSquare(i) {
        return (<Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)} />);
    }

    render() {
        // const winner = calculateWinner(this.state.squares);
        // let status;
        // if (winner) {
        //   status = 'Winner ' + winner;
        // } else {
        //   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        // }
        return (
            <div>
                {/* <div className="status">{status}</div> */}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{ squares: Array(9).fill(null) }],
            stepNumber: 0,
            xIsNext: true,
            lastMove: null
        }
    }
    getMoves(squares) {
        return squares.reduce((acc, v, i) => {
            if (v !== null && i === this.state.lastMove) {
                return (<span>{acc}<mark > {"(C:" + (i % 3) + " R:" + Math.floor(i / 3) + ")"}</mark></span>)
            } else if (v !== null && acc !== null) {
                return (<span>{acc} {" (C:" + (i % 3) + " R:" + Math.floor(i / 3) + ")"}</span>)
            } else if (v !== null) {
                return (<span>{" (C:" + (i % 3) + " R:" + Math.floor(i / 3) + ")"}</span>);
            }
            return acc;
        }, null)
    }
    /**
     * handle click of the square
     * @param {*} i 
     *
     */
    handleClick(i) {
        console.log("handleClick");
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{ squares: squares }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            lastMove: i
        })
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            console.log(step);
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            const currentMoves = this.getMoves(step.squares);
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>
                        {desc}
                    </button>
                    <span>{currentMoves}</span>
                </li>
            )
        })
        let status;
        if (winner) {
            status = 'Winner' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
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

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
