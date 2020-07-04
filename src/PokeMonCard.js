import React, { Component } from 'react';
import './PokeMonCard.style.css';

// eslint-disable-next-line no-unused-vars
const POKE_API =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class PokemonCard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;

    return (
      <div className='card'>
        <h1 class='title'>{this.props.name}</h1>
        <div className='image'>
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className='data'>Type {this.props.type}</div>
        <div className='data'>EXP {this.props.exp}</div>
      </div>
    );
  }
}

export default PokemonCard;
