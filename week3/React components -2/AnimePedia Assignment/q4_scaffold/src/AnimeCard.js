import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  
  
  render() {
    const {src, name} = this.props
    return <div className="anime-card">
      <img src={src} alt='image' />
        <p>{this.props.name}</p>
    </div>;
  }
}

export default AnimeCard;
