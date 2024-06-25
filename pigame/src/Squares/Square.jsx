import React, { useRef, useState } from 'react'
import './square.css'
const Square = ({key}) => {
  const[value,setValue] = useState();
  const inputRefs = useRef()
  const handleChange = ()=>{}
  const handleClick = ()=>{}
  const handleKeyDown = ()=>{}
  return (
    <div className='sqr'>
      <input type="number"
      key={key}
      onChange={e => handleChange()}
      onClick={()=> handleClick()}
      onKeyDown={()=> handleKeyDown()}
      />
    </div>
  )
}

export default Square