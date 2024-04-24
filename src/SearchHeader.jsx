import React from 'react'
import { useState } from 'react'

function SearchHeader( {search}) {
  const [valueInput, setValueInput] = useState('')
function handleFormSubmit(e){
  e.preventDefault()
  console.log(valueInput)
  search(valueInput)
}

const handleChange = (event) =>{
setValueInput(event.target.value)
}

  return (
    <div>
       <form onSubmit={handleFormSubmit}>
        <label className='ne'>Ne Arıyorsun ?</label>
        <input type="text" value={valueInput} className='search-input' onChange={handleChange}/>
        
       </form>
    </div>
  )
}

export default SearchHeader
