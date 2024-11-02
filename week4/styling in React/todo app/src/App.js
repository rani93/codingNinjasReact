import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  
    // complete the function to add a new Todo to the list
    handleAdd = (newTodo) => {
      this.setState((prevState) => ({
        todos: [...prevState.todos, { text: newTodo }],
      }));
    };
    
   


  handleRemove = (index) => {
    // complete the function to remove the Todo from the list
    this.setState((prevState) => ({
      todos: prevState.todos.filter((_, i) => i !== index),
    }));
  };
  render() {
    let {todos} = this.state;
    
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form handleAdd = {this.handleAdd}/>
        <List todos={todos} handleAdd={this.handleAdd} handleRemove={this.handleRemove} />

      </div>
    );
  }
}
