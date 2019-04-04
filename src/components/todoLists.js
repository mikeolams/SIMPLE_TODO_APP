import React from 'react';

const todoLists = ({todos,removeTodo})=>{
    const todoItem = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection item" onClick={()=>{removeTodo(todo.id)}} key={todo.id}>
                <span >{todo.content}</span>
                </div>
            )
        })
    ):(
        <p className="center">You do not have any more to do. Well done!!</p>
    )
    return ( 
    <div className="todos collection">{todoItem}</div>    
    )

}
    

export default todoLists