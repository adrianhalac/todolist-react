import React, { Component } from 'react'
import './Todo.css';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      replacement: this.props.todo,
      editMode: false,
      striked: false
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEditInput = this.handleEditInput.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleStrike = this.handleStrike.bind(this);
  }

  handleEdit(evt){
    this.setState({ editMode: true});
  }

  handleRemove(evt){
    this.props.removeTodo(this.props.id);
  }

  handleEditInput(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleEditSubmit(evt){
    evt.preventDefault();
    this.props.changeTodo(this.props.id, this.state.replacement);
    this.setState({ editMode: false });
  }

  handleStrike(){
    this.setState(state => ({
      striked: !state.striked,
    }));
  }

  render(){
    if(this.state.editMode){
      return(
        <div className='Todo-edit'>
          <form className='Todo-form' onSubmit={this.handleEditSubmit}>
            <input 
              className='Todo-edit-input'
              type='text'
              id='replacement'
              name='replacement'
              value={this.state.replacement}
              onChange={this.handleEditInput}
            />
            <button className='Todo-edit-save'>SAVE</button>
          </form>
        </div>
      );
    }

    return(
      <div className='Todo'>
        <div onClick={this.handleStrike} 
          style={{ 
            textDecoration: this.state.striked ? 'line-through' : 'none'
          }}
          className='Todo-task'>
          {this.props.todo}
        </div>
        <div className='Todo-buttons'>
          <div onClick={this.handleEdit}><i className="fas fa-edit"></i></div>
          <div onClick={this.handleRemove}><i className="fas fa-trash-alt"></i></div>
        </div>
      </div>
    );
  }
}

export default Todo;