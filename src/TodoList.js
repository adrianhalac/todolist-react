import React, { Component } from 'react'
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.changeTodo = this.changeTodo.bind(this);
  }

  addTodo(todo){
    let newTodo = {...todo, id: uuidv4()}
    this.setState(state => ({
      todos: [...state.todos, newTodo]
    }));
  }

  changeTodo(id, newText){
    let newTodos = this.state.todos.map(x => {
      if(x.id === id){
        return { task: newText, id: x.id}
      } else {
        return x;
      }
    });
    this.setState({ todos: newTodos });
  }

  removeTodo(id){
    this.setState(state => ({
      todos: state.todos.filter(td => td.id !== id)
    }));
  }

  render(){
    return(
      <div className='TodoList'>
        <div className='TodoList-headers'>
          <h1>Todo List!</h1>
          <h6>A Simple React Todo List App</h6>
          <hr />
        </div>
        <div className='TodoList-list'>
          {this.state.todos.map(td => <Todo 
            todo={td.task} id={td.id} key={td.id}
            removeTodo={this.removeTodo}
            changeTodo={this.changeTodo}
          />)}
        </div>
        <NewTodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default TodoList;