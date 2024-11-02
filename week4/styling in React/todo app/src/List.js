import { Component } from "react";


export class List extends Component {
  render() {
    let {todos, handleRemove } =this.props;
   // console.log(todos);
    return (
      <div className="list">
        {/* Render the todo here from the props*/}
        {
          todos.map((todo, index)=>(
            <div className="todo" key={index}>
            
              <p>{todo.text}</p>
              <button onClick={()=> handleRemove(index)}>X</button>

            </div>

          ))
        }


      </div>
    );
  }
}
