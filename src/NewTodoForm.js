import React, { Component } from 'react'
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      task: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt){
    evt.preventDefault();
    if(this.state.task){
      this.props.addTodo(this.state);
      this.setState({ task: '' })
    }
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className='NewTodoForm'>
        <label htmlFor='task' className='NewTodoForm-label'>New Todo</label>
        <div className='NewTodoForm-inputs'>
          <input className='NewTodoForm-textin'
            type='text'
            id='task'
            name='task'
            value={this.state.task}
            onChange={this.handleChange}
            placeholder="New Todo"
          />
          <button className='NewTodoForm-button'>ADD TODO</button>
        </div>
      </form>
    );
  }
}

export default NewTodoForm;