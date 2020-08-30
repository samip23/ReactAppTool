import React from 'react';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash)

class Tasks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        assignee:'',
        priority:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        assignee:'',
        priority:'',
        key:''
      }
    })
    }
  }
  handleInput(event) {
    const { name, value } = event.target;

    this.setState(prevValue => {
      if (name === "task") {
        return {
          text: value,
          assignee: prevValue.assignee,
          priority: prevValue.priority,
          key: Date.now()
        };
      } else if (name === "assignee") {
        return {
          task: prevValue.task,
          assignee: value,
          priority: prevValue.priority,
          key: Date.now()
        };
      } else if (name === "priority") {
        return {
          task: prevValue.task,
          assignee: prevValue.assignee,
          priority: value,
          key: Date.now()
        };
      }
    });
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,assignee, priority, key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
        item.assignee=assignee;
        item.priority=priority;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
 render(){
  return (
    <div className="App">
      <header>
        <form onSubmit={this.addItem}>
          <input type="text" placeholder="Enter task" name="task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <input type="text" placeholder="Enter assignee" name="assignee" value= {this.state.currentItem.assignee} onChange={this.handleInput}></input>
          <input type="text" placeholder="Enter priority" name="priority" value= {this.state.currentItem.priority} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>
        <p>{this.state.items.text}</p>
        <p>{this.state.items.assignee}</p>
        <p>{this.state.items.priority}</p>
        
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        
      </header>
    </div>
  );
 }
}


export default Tasks;