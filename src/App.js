import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null)) 
  const [currentPlayer, setCurrentPlayer] = useState("X")
  const [winner, setWinner] = useState(null)

  const calculateWinner = (squares) => {
    const winningCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]; 
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    if(!squares.includes(null)){
      return "draw"
    }  
    return null
  }

  const getStatusMessage = () => {
    if(winner){
      return `${winner}`
    }else if(!squares.includes(null)){
      return "It's a draw!"
    }else{
      return `${currentPlayer}`
    }
  }

  const handleSquareClick = (i) => {
    if(squares[i] || winner) return ;

    const newSquares = [...squares] ;
      newSquares[i] = currentPlayer ;
      setSquares(newSquares)

      const newWinner = calculateWinner(newSquares)
      if(newWinner){
        setWinner(newWinner)
      }else{
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
      }
  }

  const handleRestartClick = () => {
    setSquares(Array(9).fill(null))
    setCurrentPlayer("X")
    setWinner(null)
  }
   
  
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {squares.map((value, i)=> (
          <button key={i} className="square" onClick={() => handleSquareClick(i)} disabled={value || winner}>
            {value}
          </button>
        ))}
      </div>
      <div className="status"> 
        {getStatusMessage()}
      </div>
      <button onClick={handleRestartClick}> 
          Restart Game
      </button>
    </div>
  )
}

export default App