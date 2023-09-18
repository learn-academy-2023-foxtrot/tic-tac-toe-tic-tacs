import React from 'react'

const Square = ({value, onClick, disabled}) => {
  return (
      <button className="square" onClick={onClick} disabled={disabled}>
        {value}
      </button>
  )
}
export default Square
