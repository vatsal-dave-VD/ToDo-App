import React from 'react'

const ToDos = ({todos, editTodo, deleteTodo}) => {
    // && (todos.id!==undefined || todos.content!==undefined)
    const todoList = (todos.length) ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <input type="text" value={todo.content} style={{width:"95%"}} onChange={(event) => editTodo(todo.id,(event.target.value))} />
                    <span style={{float:"right",color:"red",fontSize:"25px",marginTop:"15px",cursor:"pointer"}} onClick={() => deleteTodo(todo.id)}><i className="fa fa-close text-danger"></i></span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo left!!!!!</p>
    )   

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default ToDos
