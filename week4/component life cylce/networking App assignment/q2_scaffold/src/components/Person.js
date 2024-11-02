import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  
  componentWillUnmount() {
    const { email } = this.props.person;
    alert(`A person with email ${email} was removed from your network!`);
  
  }


//   componentWillUnmount() {
//   alert(`A person with email ${this.props.person.email} was removed from your network!`);
//   console.log(this.props.person.email)
// }

    

  render() {
    const { img, email } = this.props.person;
    const {onRemove, index} = this.props;
    
    
    // console.log(this.props.index);
    return (
      <div className="person">
        <b onClick={()=> onRemove(index)}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
