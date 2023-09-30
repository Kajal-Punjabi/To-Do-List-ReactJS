import React from 'react'
import {TodoItem} from '../MyComponents/TodoItem';

export const Todos = (props) => {
  let minStyle = {
      minHeight: "70vh",
      margin: "40px auto"
  }
  return (
    <div className='container my-3' style={minStyle}>
      <h3 className='my-3'>To-dos List</h3>
      {/* <props className="todos"></props> */}

      {/* //HOF */}
      {props.todos.length===0? "No to-dos to display" :
      props.todos.map((todo)=>{
        return (
          <>
        <TodoItem todo = {todo} onDelete={props.onDelete}/> <hr />
        </>
        )
    })
    }
    </div>
  )
}

export default Todos
