import React, { Component } from 'react';
import  Additem from './components/addItem';
// import List from './components/List';
import Todolists from './components/todoLists';
// import Endpoint from './components/Server-end-point';



class App extends Component {
  state = {
    todoItems:[
      {id:1, content: 'shop for cloth'},
      {id:2, content: 'Go to viewing center by noon'}
    ]
  }
  removeTodoItem = (id)=>{
    console.log(id);
    const todoItems =this.state.todoItems.filter(item=>
       item.id !== id
    )
    this.setState({
      todoItems
    })
  }
  addTodoItem = (todoItem) =>{
    todoItem.id = Math.random();
    let todoItems = [...this.state.todoItems,todoItem];
    this.setState({
      todoItems
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className="center yellow-text">Simple Todo's List</h1>
        <div className="container">
          <Todolists todos={this.state.todoItems} removeTodo={this.removeTodoItem}/>
          <Additem addTodo={this.addTodoItem}/>
       </div>
      </div>
    );
  }
}

export default App;
