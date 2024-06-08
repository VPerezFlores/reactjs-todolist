import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const { todos } = props

  return (
    <ul className='main'>
      {/* mapping out content: write html or jsx once and apply to 
      every element in list */}
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
      
    </ul>
  )
}
