import React from 'react';
import { uniqueId } from '../../util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  linkState(key) { // update
  // here we use '[key]' to set the key to be the value of the 'key' variable,
  // as opposed to a string of 'key'
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  handleSubmit(event) {
    event.preventDefault();
    const newTodo = this.state;
    newTodo.id = uniqueId();
    this.props.receiveTodo(newTodo);
  }


  render() {
    return (
      <div>
        <input type="text"
          onChange={this.linkState('title')}
          value={this.state.title}/>
        <input type="text"
          onChange={this.linkState('body')}
          value={this.state.body}/>
        <button onClick={this.handleSubmit}>
          Create Todo!
        </button>
      </div>
    );
  }

}

export default TodoForm;
