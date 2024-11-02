import "./styles.css";
import { Component } from "react";
import Person from "./components/Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      network: [
        {
          id: 1,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071817/pexels-rodnae-productions-7348711_doe69b.jpg",
          email: "john@gmail.com",
          show: true
        },
        {
          id: 1,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071807/pexels-zaid-mohammed-15131063_bysy0s.jpg",
          email: "stephen@gmail.com",
          show: true
        },
        {
          id: 1,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071812/pexels-ali-kazal-14520051_qrdgym.jpg",
          email: "alex@gmail.com",
          show: true
        }
      ]
    };
  }

  // Create function to remove person from your network here
  handleRemove = (index) => {
    // complete the function to remove the Todo from the list
   //this.componentWillUnmount(index);
      
    
    // this.setState((prevState) => ({
    //   network: prevState.network.filter((_, i) => i !== index),
    // }));
    const network = [...this.state.network];
    network[index].show = false;
    this.setState({ network });



  };

  
  
  // componentWillUnmount(index) {
  //   alert(`A person with email ${this.state.network[index].email} was removed from your network`);
  // }

  render() {
    let {network} = this.state;
    return (
      <div className="App">
        <h1>My Network</h1>
        <div className="list">
          {network.map((p, i) => (p.show&&
            <Person key={i} person={p} index={i} onRemove={this.handleRemove} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
