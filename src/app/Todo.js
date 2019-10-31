import React, { Component, useState } from 'react';

export class Todo extends Component {

  constructor(){
    super();
    this.state = {
        lists: [],
        newList: ""
    }
  }
  handleChange(e){
    const {value} = e.target;
    this.setState({newList: value})
  }
handleClick(e){
  e.preventDefault();
  const lists = [...this.state.lists, this.state.newList];
  this.setState({lists, newList: ""});
}

removeTask(i){
  const lists = [...this.state.lists.slice(0, i), this.state.lists.slice(i+1)]
  this.setState({lists});
  };


  render() {
    return (
    <div className = "toDoListMain">
     <form>
       <input type="text" placeholder="Task" value={this.state.newList} onChange={this.handleChange.bind(this)}/>
       <button onClick={this.handleClick.bind(this)}>Add Task</button>
     </form>
     <ul>
       {this.state.lists.map((task, i) => (
       <div onClick={() =>this.removeTask.call(this, i)}>{task}</div>
       ))}
     </ul>
    </div>
    );
  }
}