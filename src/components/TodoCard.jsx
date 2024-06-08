import React from 'react'

export default function TodoCard(props) {
  // destructures children from properties and renders <p>
  const {children} = props
  return (
    <li className='todoItem' >
      {children}
      <div className='actionsContainer'> 
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-regular fa-trash-can"></i> 
      </div>
     </li>
  )
}
